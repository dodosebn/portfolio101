"use client";

import React from "react";
import { motion } from "framer-motion";
import PjCont from "./projCont";
import pjMaps from "./pjEasyAdd";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <div className="p-4 lg:px-16">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pjMaps.length > 0 ? (
          pjMaps.map((pj, i) => (
            <motion.div
              className="shadow-custom py-4 dark:border-[1.2px] border-[#fafafa]"
              key={pj.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <PjCont  {...pj} />
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
};

export default Projects;
