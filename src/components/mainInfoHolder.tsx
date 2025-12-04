import ImButton from "./customs/imButton";
import { FaBookReader } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import TransitionLink from "./utils/transitionLink";

const MainInfoHolder = () => {
  return (
    <div className="text-center pt-16 md:pt-20">
      <section className="space-y-2">
        <h1 className="text-black text-3xl dark:text-[#f1f1f1] font-bold">
          Hey, I'm Orji Dominion.
        </h1>

<h3
  className="italic font-bold text-xl inline-block
    bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent"
>
  Your next Software Developer
</h3>


        <div className="flex md:justify-center justify-start px-4">
          <p className="leading-7 max-w-xl md:text-center text-start">
            I specialize in writing clean code, bringing elegant user interfaces to life,
            enhancing user experience, and creating innovative solutions.
          </p>
        </div>
      </section>

      <section
        className="p-4 flex justify-center gap-[0.35rem] md:gap-4"
      >
        <TransitionLink href={"#Contact"}>
          <ImButton name="Hire Me" icon={TbMessages} />
        </TransitionLink>

        <a href="/doc/Orji-Dominion-resume.pdf" target="_blank" rel="noopener noreferrer">
          <ImButton name="View Resume" icon={FaBookReader} />
        </a>
      </section>
    </div>
  );
};

export default MainInfoHolder;
