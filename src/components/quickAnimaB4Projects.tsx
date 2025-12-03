"use client";
import { FaJs, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, Variants } from "framer-motion";

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

const QuickAnimaB4Projects = () => {
  const icons = [
    <FaJs size={27} className="text-yellow-400" />,
    <FaGithub size={27} className="text-gray-800" />,
    <FaNodeJs size={27} className="text-green-600" />,
    <RiTailwindCssFill size={27} className="text-cyan-400" />,
    <FaReact size={27} className="text-sky-500" />,
  ];

  const repeatedIcons = Array(30)
    .fill(icons)
    .flat()
    .map((icon, i) => (
      <div key={i} className="w-13 h-15 flex items-center justify-center">
        {icon}
      </div>
    ));

  return (
    <motion.div      variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} className="relative flex justify-center mx-auto bg-gray-100
      dark:bg-[#151515] rounded-full overflow-hidden w-[260px]">

      <div className="absolute left-0 top-0 h-full w-17 bg-linear-to-r 
                      from-gray-100 dark:from-black/90 to-transparent z-10" />

      <div className="absolute right-0 top-0 h-full w-17 bg-linear-to-l 
                      from-gray-100 dark:from-black/90 to-transparent z-10" />

      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        }}
      >
        {repeatedIcons}
      </motion.div>
    </motion.div>
  );
};

export default QuickAnimaB4Projects;
