import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { supabaseAdmin } from "#/lib/supabase";
import type { BlogPost, BlogPostInsert } from "../blogtype";

// ── helpers ──────────────────────────────────────────────────────────────────

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const calcReadTime = (html: string) => {
  const text = html.replace(/<[^>]+>/g, "");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

// ── Toolbar ───────────────────────────────────────────────────────────────────

const ToolbarBtn = ({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    title={title}
    onClick={onClick}
    className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
      active
        ? "bg-white text-black"
        : "text-gray-400 hover:text-white hover:bg-white/10"
    }`}
  >
    {children}
  </button>
);

// ── Main Component ────────────────────────────────────────────────────────────

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [isNew, setIsNew] = useState(false);

  // form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState("");
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Start writing your post…" }),
    ],
    editorProps: {
      attributes: {
        class:
          "min-h-[320px] outline-none prose prose-invert prose-sm max-w-none p-4",
      },
    },
  });

  // ── data ──

  const fetchPosts = async () => {
    const { data } = await supabaseAdmin
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setPosts(data as BlogPost[]);
  };

  useEffect(() => { fetchPosts(); }, []);

  // ── form helpers ──

  const resetForm = () => {
    setTitle(""); setSlug(""); setExcerpt(""); setCoverImage("");
    setTags(""); setPublished(false); setEditing(null); setIsNew(false);
    editor?.commands.setContent("");
  };

  const loadPost = (post: BlogPost) => {
    setEditing(post);
    setIsNew(false);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt ?? "");
    setCoverImage(post.cover_image ?? "");
    setTags(post.tags.join(", "));
    setPublished(post.published);
    editor?.commands.setContent(post.content);
  };

  const handleTitleBlur = () => {
    if (!editing && title && !slug) setSlug(slugify(title));
  };

  // ── cover image upload ──

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `covers/${Date.now()}.${ext}`;
    const { error } = await supabaseAdmin.storage
      .from("blog-covers")
      .upload(path, file, { upsert: true });
    if (!error) {
      const { data } = supabaseAdmin.storage.from("blog-covers").getPublicUrl(path);
      setCoverImage(data.publicUrl);
    }
    setUploading(false);
  };

  // ── save ──

  const handleSave = async () => {
    if (!title.trim() || !editor) return;
    setSaving(true);

    const content = editor.getHTML();
    const payload: BlogPostInsert = {
      title: title.trim(),
      slug: slug || slugify(title),
      excerpt: excerpt.trim() || null,
      content,
      cover_image: coverImage || null,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      read_time: calcReadTime(content),
      published,
    };

    const { error } = editing
      ? await supabaseAdmin.from("blog_posts").update(payload).eq("id", editing.id)
      : await supabaseAdmin.from("blog_posts").insert(payload);

    setSaving(false);
    if (error) { setFeedback("❌ " + error.message); return; }
    setFeedback(editing ? "✅ Post updated!" : "✅ Post created!");
    setTimeout(() => setFeedback(""), 3000);
    resetForm();
    fetchPosts();
  };

  // ── delete ──

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    await supabaseAdmin.from("blog_posts").delete().eq("id", id);
    fetchPosts();
    if (editing?.id === id) resetForm();
  };

  // ── toggle publish ──

  const togglePublish = async (post: BlogPost) => {
    await supabaseAdmin
      .from("blog_posts")
      .update({ published: !post.published })
      .eq("id", post.id);
    fetchPosts();
  };

  // ── render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Blog Admin</h1>
          {!isNew && !editing && (
            <button
              onClick={() => setIsNew(true)}
              className="px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              + New Post
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ── Post list ── */}
          <aside className="lg:col-span-1 space-y-2">
            {posts.length === 0 && (
              <p className="text-gray-500 text-sm">No posts yet.</p>
            )}
            {posts.map((post) => (
              <div
                key={post.id}
                className={`p-3 rounded-xl border cursor-pointer transition-colors ${
                  editing?.id === post.id
                    ? "border-white/40 bg-white/10"
                    : "border-white/10 bg-white/5 hover:border-white/25"
                }`}
                onClick={() => loadPost(post)}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium leading-snug line-clamp-2">
                    {post.title}
                  </p>
                  <span
                    className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      post.published
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {post.published ? "live" : "draft"}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  {post.read_time} min read · {new Date(post.created_at).toLocaleDateString()}
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); togglePublish(post); }}
                    className="text-[11px] text-gray-400 hover:text-white transition-colors"
                  >
                    {post.published ? "Unpublish" : "Publish"}
                  </button>
                  <span className="text-gray-700">·</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(post.id); }}
                    className="text-[11px] text-red-400 hover:text-red-300 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </aside>

          {/* ── Editor ── */}
          {(isNew || editing) && (
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  {editing ? "Edit Post" : "New Post"}
                </h2>
                <button onClick={resetForm} className="text-xs text-gray-500 hover:text-white">
                  ✕ Cancel
                </button>
              </div>

              {/* Title */}
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={handleTitleBlur}
                placeholder="Post title"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                           text-white placeholder-gray-600 text-lg font-semibold
                           focus:outline-none focus:border-white/30 transition-colors"
              />

              {/* Slug */}
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="slug-auto-generated"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5
                           text-gray-400 placeholder-gray-600 text-sm font-mono
                           focus:outline-none focus:border-white/30 transition-colors"
              />

              {/* Excerpt */}
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Short excerpt shown on preview cards…"
                rows={2}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                           text-white placeholder-gray-600 text-sm resize-y
                           focus:outline-none focus:border-white/30 transition-colors"
              />

              {/* Cover image */}
              <div className="flex items-center gap-3">
                <label className="text-xs text-gray-500 shrink-0">Cover image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverUpload}
                  className="text-xs text-gray-400 file:mr-3 file:py-1 file:px-3
                             file:rounded-full file:border-0 file:text-xs
                             file:bg-white/10 file:text-white hover:file:bg-white/20"
                />
                {uploading && <span className="text-xs text-gray-500">Uploading…</span>}
                {coverImage && !uploading && (
                  <img src={coverImage} alt="cover" className="h-10 w-16 object-cover rounded-lg" />
                )}
              </div>

              {/* Tags */}
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Tags: React, AI, Freelance  (comma-separated)"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5
                           text-white placeholder-gray-600 text-sm
                           focus:outline-none focus:border-white/30 transition-colors"
              />

              {/* TipTap editor */}
              <div className="border border-white/10 rounded-xl overflow-hidden">
                {/* Toolbar */}
                <div className="flex flex-wrap gap-1 p-2 border-b border-white/10 bg-white/5">
                  <ToolbarBtn title="Bold" onClick={() => editor?.chain().focus().toggleBold().run()} active={editor?.isActive("bold")}>B</ToolbarBtn>
                  <ToolbarBtn title="Italic" onClick={() => editor?.chain().focus().toggleItalic().run()} active={editor?.isActive("italic")}><em>I</em></ToolbarBtn>
                  <ToolbarBtn title="Strike" onClick={() => editor?.chain().focus().toggleStrike().run()} active={editor?.isActive("strike")}><s>S</s></ToolbarBtn>
                  <ToolbarBtn title="Code" onClick={() => editor?.chain().focus().toggleCode().run()} active={editor?.isActive("code")}>{"`"}</ToolbarBtn>
                  <span className="text-white/20 px-1">|</span>
                  <ToolbarBtn title="H2" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} active={editor?.isActive("heading", { level: 2 })}>H2</ToolbarBtn>
                  <ToolbarBtn title="H3" onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} active={editor?.isActive("heading", { level: 3 })}>H3</ToolbarBtn>
                  <span className="text-white/20 px-1">|</span>
                  <ToolbarBtn title="Bullet list" onClick={() => editor?.chain().focus().toggleBulletList().run()} active={editor?.isActive("bulletList")}>• List</ToolbarBtn>
                  <ToolbarBtn title="Ordered list" onClick={() => editor?.chain().focus().toggleOrderedList().run()} active={editor?.isActive("orderedList")}>1. List</ToolbarBtn>
                  <ToolbarBtn title="Blockquote" onClick={() => editor?.chain().focus().toggleBlockquote().run()} active={editor?.isActive("blockquote")}>" "</ToolbarBtn>
                  <ToolbarBtn title="Code block" onClick={() => editor?.chain().focus().toggleCodeBlock().run()} active={editor?.isActive("codeBlock")}>{"{}"}</ToolbarBtn>
                  <span className="text-white/20 px-1">|</span>
                  <ToolbarBtn title="Undo" onClick={() => editor?.chain().focus().undo().run()}>↩</ToolbarBtn>
                  <ToolbarBtn title="Redo" onClick={() => editor?.chain().focus().redo().run()}>↪</ToolbarBtn>
                </div>
                <EditorContent editor={editor} className="bg-[#111] text-white" />
              </div>

              {/* Footer controls */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <div
                    onClick={() => setPublished((p) => !p)}
                    className={`w-10 h-5 rounded-full transition-colors relative ${
                      published ? "bg-green-500" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                        published ? "translate-x-5" : ""
                      }`}
                    />
                  </div>
                  <span className="text-sm text-gray-400">
                    {published ? "Published" : "Draft"}
                  </span>
                </label>

                <div className="flex items-center gap-3">
                  {feedback && <span className="text-sm">{feedback}</span>}
                  <button
                    onClick={handleSave}
                    disabled={saving || !title.trim()}
                    className="px-5 py-2 rounded-lg bg-white text-black text-sm font-semibold
                               disabled:opacity-40 hover:bg-gray-200 transition-colors"
                  >
                    {saving ? "Saving…" : editing ? "Update Post" : "Create Post"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;