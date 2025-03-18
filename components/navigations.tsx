'use client';
import React from 'react';
import TransitionLink from './utils/transitionLink';
import { useTheme } from './themeProvider'; 
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const Navigations = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className='flex justify-between '>
        <ul className='flex gap-6 bg-[#e5e7eb]  dark:bg-[#1f2937] dark:text-[#fafafa] p-3 rounded-sm shadow-sm'>
          <li className='text-[#565f6e] hover:text-black'>
            <TransitionLink href="/">Home</TransitionLink>
          </li>
          <li className='text-[#565f6e] hover:text-black'>
            <TransitionLink href="/About">About Me</TransitionLink>
          </li>
          <li className='text-[#565f6e] hover:text-black'>
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