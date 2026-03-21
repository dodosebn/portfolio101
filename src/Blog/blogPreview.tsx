import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { BlogPost } from "./blogtype";
import supabase from "#/lib/supabase";
// import type { BlogPost } from "./blogTypes";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

type Props = {
  onSelect: (slug: string) => void;
};

const BlogPreview = ({ onSelect }: Props) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, cover_image, tags, read_time, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (data) setPosts(data as BlogPost[]);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <section id="blog" className="py-14 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span
            className="text-xs font-mono tracking-widest uppercase font-semibold
                       bg-gradient-to-r from-green-500 via-green-400 to-yellow-400
                       dark:from-green-400 dark:via-green-500 dark:to-yellow-500
                       bg-clip-text text-transparent"
          >
            Writing
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Blog
        </h1>
        <p className="text-gray-400 mt-2 text-sm max-w-md leading-relaxed">
          Thoughts on code, systems, and building things that work.
        </p>
      </motion.div>

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 h-64 animate-pulse" />
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && posts.length === 0 && (
        <p className="text-gray-500 text-sm">No posts yet — check back soon.</p>
      )}

      {/* Grid */}
      {!loading && posts.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              onClick={() => onSelect(post.slug)}
              className="group rounded-xl border border-white/10 bg-white/5
                         hover:border-white/25 hover:bg-white/8
                         transition-colors duration-200 cursor-pointer overflow-hidden"
            >
              {/* Cover */}
              {post.cover_image ? (
                <div className="h-44 overflow-hidden">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-44 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                  <span className="text-4xl text-white/10 font-bold select-none">
                    {post.title.charAt(0)}
                  </span>
                </div>
              )}

              {/* Body */}
              <div className="p-4">
                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h2 className="font-semibold text-white text-sm leading-snug mb-1.5 group-hover:text-gray-200 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                <div className="flex items-center gap-2 mt-3 text-[11px] text-gray-600">
                  <span>{new Date(post.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span>·</span>
                  <span>{post.read_time} min read</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default BlogPreview;