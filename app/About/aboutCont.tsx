import React from 'react';
import AboutMeMain from './components/aboutMeMain'; 
import AboutBg from '@/public/imgs/bg-2.avif';
import AboutAnima from './components/aboutAnima';
import SkillStyled from './components/SkillStyled';
import Expri from './components/expri';

const AboutCont = () => {
  return (
    <div>
    <div className='lg:flex justify-between lg:gap-12 border-b-[1.2px] border-b-black dark:border-gray-400 pb-2'>
      <section className='hidden lg:w-[100rem] lg:p-[5rem] lg:flex flex-col justify-center' style={{backgroundImage:`url(${AboutBg.src})`,  backgroundSize: 'cover', 
        padding: '2rem',
        objectFit: 'cover',
      }} >
        <AboutAnima className='text-[#A020F0] grid grid-cols-1 md:grid-cols-3 gap-5'/>
      </section>
      <main>
        <AboutMeMain />
      </main>
    </div>
    <div className='pt-3  border-b-[1px]  dark:border-gray-400 pb-2'>
      <h1 className='text-2xl pt-2'>Skills </h1>
    <SkillStyled />
   </div>
   <div>
    <Expri />
   </div>
    </div>
  )
}

export default AboutCont;
