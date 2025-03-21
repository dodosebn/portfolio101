import React from 'react';
import Image from 'next/image';
import profilePics from '../public/imgs/ebn1 (2).jpg';
import StackAnima from './customs/stackAnima';
import bgImg from '@/public/imgs/bg-2.avif';

const StackHolderProfile = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: 'cover',
        padding: '2rem',
        objectFit: 'cover',
      }}
      className='lg:w-[48%] lg:p-[5rem] lg:flex justify-center relative' // Added relative positioning
    >
      <div className="relative">  {/* This container will hold the StackAnima component */}
        <StackAnima />
        <div className="mx-auto flex justify-center relative top-[6rem] ">
          <Image
            src={profilePics}
            alt="My Profile"
            className="rounded-full w-[10rem] h-[10rem] lg:w-[23rem] lg:h-[23rem] border-[3px] border-solid border-[#d3d3d3]"
          />
        </div>
      </div>
    </div>
  );
};

export default StackHolderProfile;
