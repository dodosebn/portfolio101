import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import supabase from "#/lib/supabase";

type Comment = {
  id: string;
  post_id: string;
  parent_id: string | null;
  author_name: string;
  body: string;
  created_at: string;
  replies?: Comment[];
};

type Props = {
  postId: string;
};

/* ── Tiny avatar from initials ── */
const Avatar = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
  // deterministic hue from name
  const hue = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0
                 text-[10px] font-bold text-white/80"
      style={{ background: `hsl(${hue},40%,30%)`, border: `1px solid hsl(${hue},40%,45%)` }}
    >
      {initials || "?"}
    </div>
  );
};

/* ── Relative time ── */
const relativeTime = (dateStr: string) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
};

/* ── Inline compose box ── */
const ComposeBox = ({
  onSubmit,
  placeholder = "Add a comment…",
  compact = false,
  onCancel,
}: {
  onSubmit: (name: string, body: string) => Promise<void>;
  placeholder?: string;
  compact?: boolean;
  onCancel?: () => void;
}) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);

  const submit = async () => {
    const n = name.trim();
    const b = body.trim();
    if (!n || !b) return;
    setSending(true);
    await onSubmit(n, b);
    setName("");
    setBody("");
    setSending(false);
  };

  return (
    <div className={`space-y-2 ${compact ? "" : "mt-4"}`}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2
                   text-sm text-white placeholder-gray-600
                   focus:outline-none focus:border-white/25 transition-colors"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={placeholder}
        rows={compact ? 2 : 3}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2
                   text-sm text-white placeholder-gray-600 resize-none
                   focus:outline-none focus:border-white/25 transition-colors"
      />
      <div className="flex items-center gap-2 justify-end">
        {onCancel && (
          <button
            onClick={onCancel}
            className="text-xs text-gray-500 hover:text-white transition-colors px-3 py-1.5"
          >
            Cancel
          </button>
        )}
        <button
          onClick={submit}
          disabled={sending || !name.trim() || !body.trim()}
          className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold
                     hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {sending ? "Posting…" : "Post"}
        </button>
      </div>
    </div>
  );
};

/* ── Single comment (recursive for replies) ── */
const CommentItem = ({
  comment,
  postId,
  onReplyPosted,
  depth = 0,
}: {
  comment: Comment;
  postId: string;
  onReplyPosted: () => void;
  depth?: number;
}) => {
  const [showReply, setShowReply] = useState(false);

  const submitReply = async (name: string, body: string) => {
    await supabase.from("post_comments").insert({
      post_id: postId,
      parent_id: comment.id,
      author_name: name,
      body,
    });
    setShowReply(false);
    onReplyPosted();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={depth > 0 ? "ml-8 pl-4 border-l border-white/8" : ""}
    >
      <div className="flex gap-3">
        <Avatar name={comment.author_name} />
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs font-semibold text-white/80">
              {comment.author_name}
            </span>
            <span className="text-[11px] text-gray-600">
              {relativeTime(comment.created_at)}
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap break-words">
            {comment.body}
          </p>
          {depth === 0 && (
            <button
              onClick={() => setShowReply((v) => !v)}
              className="mt-1.5 text-[11px] text-gray-600 hover:text-gray-400 transition-colors"
            >
              {showReply ? "Cancel" : "Reply"}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showReply && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-10 mt-3 overflow-hidden"
          >
            <ComposeBox
              onSubmit={submitReply}
              placeholder={`Reply to ${comment.author_name}…`}
              compact
              onCancel={() => setShowReply(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4 space-y-4">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              postId={postId}
              onReplyPosted={onReplyPosted}
              depth={1}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

/* ── Main export ── */
const CommentsSection = ({ postId }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    const { data } = await supabase
      .from("post_comments")
      .select("*")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });

    if (!data) { setLoading(false); return; }

    // Build tree (one level deep)
    const roots: Comment[] = [];
    const map: Record<string, Comment> = {};

    for (const row of data as Comment[]) {
      map[row.id] = { ...row, replies: [] };
    }
    for (const row of Object.values(map)) {
      if (row.parent_id && map[row.parent_id]) {
        map[row.parent_id].replies!.push(row);
      } else if (!row.parent_id) {
        roots.push(row);
      }
    }

    setComments(roots);
    setLoading(false);
  };

  useEffect(() => { fetchComments(); }, [postId]);

  const submitComment = async (name: string, body: string) => {
    await supabase.from("post_comments").insert({
      post_id: postId,
      parent_id: null,
      author_name: name,
      body,
    });
    fetchComments();
  };

  const totalCount =
    comments.reduce((acc, c) => acc + 1 + (c.replies?.length ?? 0), 0);

  return (
    <div className="mt-14 pt-8 border-t border-white/10">
      <h3 className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-6">
        {totalCount > 0 ? `${totalCount} Comment${totalCount !== 1 ? "s" : ""}` : "Discussion"}
      </h3>

      {/* Compose */}
      <ComposeBox onSubmit={submitComment} />

      {/* List */}
      <div className="mt-8 space-y-6">
        {loading && (
          <div className="flex justify-center py-6">
            <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
          </div>
        )}

        {!loading && comments.length === 0 && (
          <p className="text-sm text-gray-600 text-center py-4">
            No comments yet — be the first.
          </p>
        )}

        <AnimatePresence>
          {comments.map((c) => (
            <CommentItem
              key={c.id}
              comment={c}
              postId={postId}
              onReplyPosted={fetchComments}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CommentsSection;