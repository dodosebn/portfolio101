import { createFileRoute } from '@tanstack/react-router'
import HirePage from "../HireMe/page";
import { motion } from 'framer-motion';
import AboutCont from '@/About/aboutCont';
export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="p-4 lg:px-16">
      <AboutCont />

      <div className="border-b pt-3 dark:border-gray-400 pb-2"></div>

      <motion.div
        className="pt-3"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <HirePage />
      </motion.div>
    </div>
}
