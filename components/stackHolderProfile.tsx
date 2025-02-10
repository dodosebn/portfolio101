import React from 'react';
import Image from 'next/image';
import profilePics from '../public/imgs/ebn1 (2).jpg';
import StackAnima from './customs/stackAnima';
const StackHolderProfile = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: "url('/imgs/bg-2.avif')",
        backgroundSize: 'cover',
        padding: '2rem',
        objectFit: 'cover',
      }}
    >
      <div> {/* for stacks rotations */}
        <StackAnima />
        <div className="mx-auto flex justify-center relative top-[6rem]">
          <Image
            src={profilePics}
            alt="My Profile"
            className="rounded-full w-[10rem] h-[10rem] border-[3px] border-solid border-[#d3d3d3]"
          />
        </div>
      </div>
    </div>
  );
};

export default StackHolderProfile;
