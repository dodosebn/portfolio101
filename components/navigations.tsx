'use client';
import React, { useState } from 'react';
import { IoMoonOutline } from "react-icons/io5";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const LazyAbout = dynamic(() => import('@/app/About/page'), {
  loading: () => <h1>Loading About Page...</h1>
});

const LazyPj = dynamic(() => import('@/app/Projects/page'), {
  loading: () => <h1>Loading Project Page...</h1>
});

const Navigations = () => {
  const [activePage, setActivePage] = useState<'about' | 'projects' | null>(null);
  const pathname = usePathname(); 

  const handleNavigation = (page: 'about' | 'projects' | null) => {
    if (activePage !== page) {
      setActivePage(page);
    }
  };

  return (
    <>
      <nav className='flex justify-between'>
        <ul className='flex gap-5 bg-[#f4f4f5] p-3 rounded-sm'>
          <li onClick={() => handleNavigation(null)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => handleNavigation('about')}>
            <Link href="/About">About Me</Link>
          </li>
          <li onClick={() => handleNavigation('projects')}>
            <Link href="/Projects">Projects</Link>
          </li>
        </ul>
        <div className='bg-[#f4f4f5] p-3 rounded-sm'>
          <IoMoonOutline size={24} />
        </div>
      </nav>

      {activePage === 'about' && <LazyAbout />}
      {activePage === 'projects' && <LazyPj />}

      {activePage === null && pathname === '/' && <></>}
    </>
  );
};

export default Navigations;
