// ClapButton.tsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandsClapping } from "react-icons/fa6";
import supabase from "#/lib/supabase";

type Props = {
  postId: string;
};

const MAX_CLAPS = 50;

const ClapButton = ({ postId }: Props) => {
  const [totalClaps, setTotalClaps] = useState(0);
  const [userClaps, setUserClaps] = useState(0);
  const [floatingNums, setFloatingNums] = useState<
    { id: number; val: number }[]
  >([]);
  const [burst, setBurst] = useState(false);

  const storageKey = `claps:${postId}`;

  useEffect(() => {
    const load = async () => {
      try {
        // local claps
        const saved = Number(localStorage.getItem(storageKey) ?? "0");
        setUserClaps(saved);

        // db claps
        const { data, error } = await supabase
          .from("blog_posts")
          .select("clap_count")
          .eq("id", postId)
          .single();

        if (error) {
          console.error("CLAP LOAD ERROR:", error);
          return;
        }

        setTotalClaps(data?.clap_count ?? 0);
      } catch (err) {
        console.error(err);
      }
    };

    load();
  }, [postId]);

  const handleClap = async () => {
    if (userClaps >= MAX_CLAPS) return;

    const nextUserClaps = userClaps + 1;
    const nextTotal = totalClaps + 1;

    // optimistic update
    setUserClaps(nextUserClaps);
    setTotalClaps(nextTotal);

    // local persist
    localStorage.setItem(storageKey, String(nextUserClaps));

    // floating animation
    const id = Date.now();

    setFloatingNums((prev) => [
      ...prev.slice(-4),
      { id, val: nextUserClaps },
    ]);

    setTimeout(() => {
      setFloatingNums((prev) =>
        prev.filter((f) => f.id !== id)
      );
    }, 900);

    // burst animation
    setBurst(true);

    setTimeout(() => {
      setBurst(false);
    }, 300);

    // persist to supabase
    const { error } = await supabase
      .from("blog_posts")
      .update({
        clap_count: nextTotal,
      })
      .eq("id", postId);

    if (error) {
      console.error("CLAP ERROR:", error);

      // rollback
      setUserClaps(userClaps);
      setTotalClaps(totalClaps);

      localStorage.setItem(storageKey, String(userClaps));
    }
  };

  const clapped = userClaps > 0;

  return (
    <div className="flex flex-col items-center gap-1.5 select-none">
      <div className="relative">
        {/* Floating Numbers */}
        <AnimatePresence>
          {floatingNums.map((f) => (
            <motion.span
              key={f.id}
              initial={{ opacity: 1, y: 0, scale: 0.9 }}
              animate={{ opacity: 0, y: -36, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2
                         text-xs font-bold text-green-400 pointer-events-none"
            >
              +1
            </motion.span>
          ))}
        </AnimatePresence>

        {/* Burst Ring */}
        <AnimatePresence>
          {burst && (
            <motion.span
              initial={{ scale: 0.6, opacity: 0.7 }}
              animate={{ scale: 1.8, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 rounded-full border border-green-400"
            />
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleClap}
          disabled={userClaps >= MAX_CLAPS}
          whileTap={{ scale: 0.88 }}
          className={`w-11 h-11 rounded-full border flex items-center justify-center
                      transition-colors duration-200
                      ${
                        clapped
                          ? "border-green-500/50 bg-green-500/10 text-green-400"
                          : "border-white/15 bg-white/5 text-gray-500 hover:border-white/30 hover:text-white"
                      }
                      disabled:opacity-30 disabled:cursor-not-allowed`}
          aria-label="Clap for this post"
        >
          <FaHandsClapping size={24} />
        </motion.button>
      </div>

      <span className="text-xs text-gray-500 tabular-nums">
        {totalClaps > 0
          ? totalClaps.toLocaleString()
          : "Clap"}
      </span>
    </div>
  );
};

export default ClapButton;