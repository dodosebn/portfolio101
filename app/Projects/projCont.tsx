import React from 'react';
import { pjProps } from '@/types';
import Image from 'next/image';

const PjCont: React.FC<pjProps> = ({ pjTitle, pjBio, pjStacks, pjPics, liveUrl, repoUrl }) => {
  return (
    <div className="p-6 lg:px-16 bg-[#ffffff]">
      <main>
        <div>
          <Image src={pjPics} alt={pjTitle} width={500} height={300} className='object-cover' />
        </div>
        <h1>{pjTitle}</h1>
        <p>{pjBio}</p>
        <h3>Tech stack</h3>
        <ul>
          {pjStacks.map((stack: string, index: number) => (
            <li key={index}>{stack}</li>
          ))}
        </ul>
        <div className='flex gap-[2rem]'>
          <button><a href={repoUrl}>Github</a></button>
          <button><a href={liveUrl}>Live</a></button>
        </div>
      </main>
    </div>
  );
};

export default PjCont