import pjMaps from '@/Projects/pjEasyAdd';
import PjCont from '@/Projects/projCont';
import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion";

import type { Variants } from "framer-motion";

// ✅ Type the variants correctly
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
export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return     <div className="p-4 lg:px-16">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pjMaps.length > 0 ? (
          pjMaps.map((pj, i) => (
            <motion.div
              key={pj.id}
              className="shadow-custom py-4 dark:border-[1.2px] border-[#fafafa]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i} // passes the index to the variant function
            >
              <PjCont {...pj} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12 text-gray-500">
            New projects coming soon!
          </div>
        )}
      </main>
    </div>
}
