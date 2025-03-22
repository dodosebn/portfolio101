import React from 'react'
import ImButton from './customs/imButton';
import ContactIcons from './customs/contactIcons';
import { FaBookReader } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import ProjectsHolder from './projectsHolder';
import TransitionLink from './utils/transitionLink';

const MainInfoHolder = () => {
  return (
    <div className='lg:text-start lg:relative lg:items-start text-center pt-[4.5rem]'>
      <section>
      <h1 className='text-red-600 dark:text-[#fafafa] font-bold'>ORJI DOMINION</h1>
       <h3 className='text-red-950 font-medium  dark:text-gradient-animated'>Your next Frontend Developer</h3>
       <p>I&apos;m a Frontend Developer who loves making website look good and work well. I enjoy writing clean code, solving problems, and continuously learning to enhance my skills.</p>
       </section>
       <section className='p-[1rem] flex justify-center lg:relative right-3 lg:justify-start gap-[0.35rem] md:gap-[1rem] button'>
        <TransitionLink href={'/HireMe'}><ImButton name='Hire Me' icon={TbMessages  } /></TransitionLink > 
        <ImButton name='View my Resume' icon={FaBookReader}/>
       </section>
       <section >
        <h3 className='text-red-950 text-lg dark:text-gradient-animated'>Reach out to to me via any of the below!</h3>
        <div className='flex gap-[1rem] justify-center pt-[0.4rem] lg:justify-start'>
        <ContactIcons  />
        </div>
       </section>
       <section className='pt-3'>
         <ProjectsHolder />
       </section>
    </div>
  )
}

export default MainInfoHolder;
