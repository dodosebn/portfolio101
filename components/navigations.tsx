import React from 'react';
import { IoMoonOutline } from "react-icons/io5";
import Link from 'next/link';

const Navigations = () => {
  return (
    <>
      <nav className='flex justify-between'>
        <ul className='flex gap-5 bg-[#f4f4f5] p-3 rounded-sm'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About Me</Link></li>
          <li><Link href="/Projects">Projects</Link></li>
        </ul>
        <div className='bg-[#f4f4f5] p-3 rounded-sm'>
          <IoMoonOutline size={24} />
        </div>
      </nav>
    </>
  );
}

export default Navigations;
