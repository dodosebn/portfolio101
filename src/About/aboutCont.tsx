import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import AboutMeMain from "./components/aboutMeMain";
import SkillStyled from "./components/SkillStyled";
import Expri from "./components/expri";

const fadeVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const AboutCont = () => {
  const mainRef = useRef(null);
  const skillsRef = useRef(null);
  const expriRef = useRef(null);

  const mainInView = useInView(mainRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const expriInView = useInView(expriRef, { once: true, margin: "-100px" });

  return (
    <div>
      <motion.div
        ref={mainRef}
        variants={fadeVariant}
        initial="hidden"
        animate={mainInView ? "visible" : "hidden"}
        className="lg:flex justify-between   dark:border-gray-400 pb-2"
      >
     

        <main>
          <AboutMeMain />
        </main>
      </motion.div>

      <motion.div
        ref={skillsRef}
        variants={fadeVariant}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        className="pt-3  pb-2 px-5 md:px-3" id='Skills'
      >
        <h1 className="text-2xl lg:text-3xl text-center py-4">The Tools Behind My Craft?💡</h1>
        <SkillStyled />
      </motion.div>

      <motion.div
        ref={expriRef}
        variants={fadeVariant}
        initial="hidden"
        animate={expriInView ? "visible" : "hidden"}
      >
        <Expri />
      </motion.div>
    </div>
  );
};

export default AboutCont;
