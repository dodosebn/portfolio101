'use client';
import React, { useState } from 'react';
import TransitionLink from './utils/transitionLink';
import { useTheme } from './themeProvider'; 
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const Navigations = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className='flex justify-between '>
        <ul className='flex gap-4 lg:gap-6 bg-[#e5e7eb]  dark:bg-[#1f2937] dark:text-[#fafafa] p-3 rounded-sm shadow-sm'>
          <li 
            className={`text-[#565f6e] dark:hover:text-white hover:text-black ${activeLink === 'home' ?  'dark:text-white  text-black' : ''}`}
            onClick={() => handleClick('home')}
          >
            <TransitionLink href="/">Home</TransitionLink>
          </li>
          <li 
            className={`text-[#565f6e] hover:text-black ${activeLink === 'about' ? 'text-black dark:text-white ' : ''}`}
            onClick={() => handleClick('about')}
          >
            <TransitionLink href="/About">About Me</TransitionLink>
          </li>
          <li 
            className={`text-[#565f6e] hover:text-black ${activeLink === 'projects' ? 'text-black dark:text-white ' : ''}`}
            onClick={() => handleClick('projects')}
          >
            <TransitionLink href="/Projects">Projects</TransitionLink>
          </li>
        </ul>
        <div className='bg-[#e5e7eb] dark:bg-[#1f2937] dark:text-[#fafafa] p-3 rounded-sm shadow-sm'>
          <button onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size={24} />
            ) : (
              <MdOutlineWbSunny size={24} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigations;