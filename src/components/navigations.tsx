import { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import TransitionLink from "./utils/transitionLink";
import { useTheme } from "./themeProvider";
import Logo from "./utils/logo";
import { ThemeToggle } from "./customs/useTheme";

// Add this export to make it a client component
export const clientOnly = true;

const Navigations = () => {
  const { theme, toggleTheme } = useTheme();
  // const [activeLink, setActiveLink] = useState<
  //   "/" | "about" | "projects" | null
  // >(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const handleClick = (link: "/" | "about" | "projects") => {
  //   setActiveLink(link);
  // };

  return (
    <nav className="relative flex justify-between items-center w-full z-10">
      <div className={mobileMenuOpen ? "hidden" : "block"}>
        <Logo />
      </div>

      <button
        type="button"
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <BiX size={24} /> : <BiMenuAltRight size={24} />}
      </button>

      <div
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } md:flex items-center gap-4`}
      >
        <ul
          className="flex flex-row gap-3 lg:gap-6 navbar dark:border-[#e5e7eb]
         p-3 rounded-sm shadow-sm whitespace-nowrap"
        >
          <li
            key="home"
            className={`text-[#565f6e] dark:text-gray-300 
            hover:text-black dark:hover:text-white transition-all`}
            // onClick={() => handleClick("/")}
          >
            <TransitionLink href="/">Home</TransitionLink>
          </li>
          <li
            key="about"
            className={`text-[#565f6e] dark:text-gray-300 
           hover:text-black dark:hover:text-white transition-all`}
            // onClick={() => handleClick("about")}
          >
            <TransitionLink href="/About">About Me</TransitionLink>
          </li>
          <li
            key="projects"
            className={`text-[#565f6e] dark:text-gray-300 
               hover:text-black dark:hover:text-white transition-all`}
            // onClick={() => handleClick("projects")}
          >
            <TransitionLink href="/Projects">Projects</TransitionLink>
          </li>
        </ul>
      </div>

      <div
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } dark:border-[#e5e7eb] border border-[#1f2937]
         dark:text-[#fafafa] p-3 rounded-sm shadow-sm`}
      >
        <button type="button" onClick={toggleTheme}>
          {theme === "light" ? (
            <IoMoonOutline size={24} />
          ) : (
            <MdOutlineWbSunny size={24} />
          )}
        </button>
      </div>

      <div className="hidden md:flex">
       <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigations;