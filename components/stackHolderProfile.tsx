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
      className='lg:w-[48%] lg:p-[5rem] lg:flex justify-center relative' 
    >
      
      <div className="relative mx-auto w-[11rem] h-[11rem] lg:w-[23rem] lg:h-[23rem] lg:top-[3rem]"> 
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Image
            src={profilePics}
            alt="My Profile"
            className="rounded-full w-full h-full border-[3px] border-solid border-[#d3d3d3]"
            priority
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <StackAnima />
        </div>
      </div>
    </div>
  );
};

export default StackHolderProfile;
