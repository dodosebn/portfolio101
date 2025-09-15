"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutMeMain from "./components/aboutMeMain";
import AboutBg from "@/public/imgs/bg-2.avif";
import AboutAnima from "./components/aboutAnima";
import SkillStyled from "./components/SkillStyled";
import Expri from "./components/expri";

const fadeVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
        className="lg:flex justify-between lg:gap-12 border-b-[1.2px] border-b-black dark:border-gray-400 pb-2"
      >
        <section
          className="pointer-events-none hidden lg:w-[100rem] lg:p-[5rem] lg:flex flex-col justify-center"
          style={{
            backgroundImage: `url(${AboutBg.src})`,
            backgroundSize: "cover",
            padding: "2rem",
            objectFit: "cover",
          }}
        >
          <AboutAnima className="pointer-events-auto text-red-500 font-bold dark:text-purple-400 grid grid-cols-1 md:grid-cols-3 gap-5" />
        </section>

        <main>
          <AboutMeMain />
        </main>
      </motion.div>

      <motion.div
        ref={skillsRef}
        variants={fadeVariant}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        className="pt-3 border-b-[1px] dark:border-gray-400 pb-2"
      >
        <h1 className="text-2xl pt-2">Skills</h1>
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
