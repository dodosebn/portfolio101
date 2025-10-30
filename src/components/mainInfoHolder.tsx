import ImButton from "./customs/imButton";
import ContactIcons from "./customs/contactIcons";
import { FaBookReader } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import ProjectsHolder from "./projectsHolder";
import TransitionLink from "./utils/transitionLink";

const MainInfoHolder = () => {
  return (
    <div className="lg:text-start lg:relative lg:items-start text-center pt-[4.5rem]">
      <section>
        <h1 className="text-red-600 dark:text-[#fafafa] font-bold">
          ORJI DOMINION
        </h1>
        <h3
          className="text-red-950 font-bold text-xl inline-block relative
           dark:text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-[#5d453b]
            dark:via-[#4d453b]
               dark:to-[#fff] "
        >
          Your next Frontend Developer
        </h3>
        <p>
          I specialize in writing clean code, bringing elegant user interfaces
          to life, enhancing user experience, and staying up-to-date with modern
          trends to remain relevant.
        </p>
      </section>
      <section
        className="p-[1rem] flex justify-center lg:relative right-3
       lg:justify-start gap-[0.35rem] md:gap-[1rem] button"
      >
        <TransitionLink href={"/HireMe"}>
          <ImButton name="Hire Me" icon={TbMessages} />
        </TransitionLink>
        <TransitionLink
          href={
            "https://docs.google.com/document/d/1irmj_R2CwMLJtFTYmbhl2S19h3urlKTx_blSky1rT0c/edit?usp=sharing"
          }
        >
          <ImButton name="View my Resume" icon={FaBookReader} />
        </TransitionLink>
      </section>
      <section>
        <h3 className="text-red-950 text-lg dark:text-[#61584c]">
          Reach out to to me via any of the below!
        </h3>
        <div className="flex gap-4 justify-center pt-[0.4rem] lg:justify-start">
          <ContactIcons />
        </div>
      </section>
      <section className="pt-3">
        <ProjectsHolder />
      </section>
    </div>
  );
};

export default MainInfoHolder;
