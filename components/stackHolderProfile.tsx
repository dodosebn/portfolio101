import React from 'react';
import Image from 'next/image';
import profilePics from '../public/imgs/ebn1 (2).jpg';
import StackAnima from './customs/stackAnima';
import bgImg from '@/public/imgs/bg-2.avif';

const StackHolderProfile = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: 'cover',
        padding: '2rem',
      }}
      className="relative overflow-hidden lg:w-[48%] lg:p-[5rem] lg:flex justify-center"
    >
      <div className="relative w-full h-full">
        {/* Orbiting icons */}
        <StackAnima />

        
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <Image
            src={profilePics}
            alt="My Profile"
            className="rounded-full w-[11rem] h-[11rem] lg:w-[23rem] lg:h-[23rem] border-[3px] border-solid border-[#d3d3d3] z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default StackHolderProfile;
