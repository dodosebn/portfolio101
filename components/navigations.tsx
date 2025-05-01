"use client";
import React, { useState } from "react";
import TransitionLink from "./utils/transitionLink"; // Make sure this isn't blocking the click event
import { useTheme } from "./themeProvider";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import Logo from "./utils/logo";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Navigations = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState<"/" | "about" | "projects" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (link: "/" | "about" | "projects") => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="relative flex justify-between items-center w-full z-10">
      <div className={mobileMenuOpen ? 'hidden' : 'block'}>
        <Logo />
      </div>

      <button
        type="button"
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <BiX size={24} /> : <BiMenuAltRight size={24} />}
      </button>

      <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex items-center gap-4`}>
        <ul className="flex flex-row gap-3 lg:gap-6 navbar dark:border-[#e5e7eb] border-1 border-[#1f2937] dark:text-[#fafafa] p-3 rounded-sm shadow-sm whitespace-nowrap">
          <li
            key="home"
            className={`text-[#565f6e] ${
              activeLink === "/" ? "dark:text-white text-black" : ""
            } hover:text-black dark:hover:text-white transition-all`}
            onClick={() => handleClick("/")}
          >
            <TransitionLink href="/">Home</TransitionLink>
          </li>
          <li
            key="about"
            className={`text-[#565f6e] ${
              activeLink === "about" ? "text-black dark:text-white" : ""
            } hover:text-black dark:hover:text-white transition-all`}
            onClick={() => handleClick("about")}
          >
            <TransitionLink href="/About">About Me</TransitionLink>
          </li>
          <li
            key="projects"
            className={`text-[#565f6e] ${
              activeLink === "projects" ? "text-black dark:text-white" : ""
            } hover:text-black dark:hover:text-white transition-all`}
            onClick={() => handleClick("projects")}
          >
            <TransitionLink href="/Projects">Projects</TransitionLink>
          </li>
        </ul>
      </div>

      <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} dark:border-[#e5e7eb] border-1 border-[#1f2937] dark:text-[#fafafa] p-3 rounded-sm shadow-sm`}>
        <button type="button" onClick={toggleTheme}>
          {theme === "light" ? (
            <IoMoonOutline size={24} />
          ) : (
            <MdOutlineWbSunny size={24} />
          )}
        </button>
      </div>

      <div className="hidden md:flex">
        <button type="button" onClick={toggleTheme}>
          {theme === "light" ? (
            <IoMoonOutline size={24} />
          ) : (
            <MdOutlineWbSunny size={24} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigations;
