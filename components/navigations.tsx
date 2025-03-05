'use client';
import React from 'react';
import { IoMoonOutline } from "react-icons/io5";
import TransitionLink from './utils/transitionLink';


const Navigations = () => {

  return (
    <>
      <nav className='flex justify-between'>
        <ul className='flex gap-6 bg-[#fafafa] p-3 rounded-sm'>
          <li>
            <TransitionLink   href="/">Home</TransitionLink >
          </li>
          <li>
            <TransitionLink  href="/About">About Me</TransitionLink >
          </li>
          <li>
            <TransitionLink  href="/Projects">Projects</TransitionLink >
          </li>
        </ul>
        <div className='bg-[#fafafa] p-3 rounded-sm'>
          <IoMoonOutline size={24} />
        </div>
      </nav>

     
    </>
  );
};

export default Navigations;
