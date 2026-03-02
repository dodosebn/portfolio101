import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import pjMaps from "@/Projects/pjEasyAdd";
import PjCont from "@/Projects/projCont";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.2,
      ease: "easeOut",
    },
  }),
};

export function Projects() {
  return (
    <div className="p-4" id="Projects">
      <h1 className="dark:text-[#fafafa] text-2xl lg:text-3xl text-center py-7 mx-auto ">
        Few Collections of My Works🚀
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pjMaps.length > 0 ? (
          pjMaps.map((pj, i) => (
            <motion.div
              key={pj.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <PjCont
                pjTitle={pj.pjTitle}
                pjBio={pj.pjBio}
                pjStacks={pj.pjStacks}
                liveUrl={pj.liveUrl}
                // Add any other props that pjMaps items might have
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12 text-gray-500">
            New projects coming soon!
          </div>
        )}
      </main>
    </div>
  );
}
