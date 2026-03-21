import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import supabase from "#/lib/supabase";
import type { BlogPost } from "./blogtype";
type Props = {
  slug: string;
  onBack: () => void;
};

const BlogBody = ({ slug, onBack }: Props) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (data) setPost(data as BlogPost);
      else setNotFound(true);
      setLoading(false);
    };
    fetch();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500 mb-4">Post not found.</p>
        <button onClick={onBack} className="text-sm text-white underline underline-offset-4">
          ← Back to blog
        </button>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="py-14 px-4 max-w-2xl mx-auto"
    >
      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white
                   transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
        Back to blog
      </button>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-gray-400 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-8">
        <span>
          {new Date(post.created_at).toLocaleDateString("en-GB", {
            day: "numeric", month: "long", year: "numeric",
          })}
        </span>
        <span>·</span>
        <span>{post.read_time} min read</span>
      </div>

      {/* Cover image */}
      {post.cover_image && (
        <div className="mb-10 rounded-2xl overflow-hidden border border-white/10">
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full object-cover max-h-80"
          />
        </div>
      )}

      {/* Content */}
      <div
        className="prose prose-invert prose-sm max-w-none
                   prose-headings:font-bold prose-headings:tracking-tight
                   prose-h2:text-xl prose-h3:text-base
                   prose-p:text-gray-300 prose-p:leading-relaxed
                   prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline
                   prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                   prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
                   prose-blockquote:border-l-green-500 prose-blockquote:text-gray-400
                   prose-img:rounded-xl prose-img:border prose-img:border-white/10
                   prose-li:text-gray-300"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer */}
      <div className="mt-14 pt-6 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-sm text-gray-500 hover:text-white transition-colors"
        >
          ← Back to blog
        </button>
        <span className="text-xs text-gray-600">
          Last updated{" "}
          {new Date(post.updated_at).toLocaleDateString("en-GB", {
            day: "numeric", month: "short", year: "numeric",
          })}
        </span>
      </div>
    </motion.article>
  );
};

export default BlogBody;