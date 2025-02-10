import React from 'react'
import ImButton from './customs/imButton';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Projects from '@/app/Projects/page';
const MainInfoHolder = () => {
  return (
    <div className='text-center pt-[4.5rem] px-[1rem]'>
      <section>
      <h1 className='text-red-500 font-bold text-[1.5rem]'>ORJI DOMINION</h1>
       <h3 className='text-red-950 font-medium text-[1.3rem]'>Your next Frontend Developer</h3>
       <p>I&apos;m a Frontend Developer who loves making website look good and work well. I enjoy writing clean code, solving problems, and continuously learning to enhance my skills.</p>
       </section>
       <section className='p-[1rem] flex justify-center gap-[1rem]'>
        <ImButton name='Hire Me'/>
        <ImButton name='View my Resume'/>
       </section>
       <section>
        <h3 className='text-red-950 text-xl'>Reach out to to me via any of the below!</h3>
        <div className='flex gap-[1rem] justify-center pt-[0.4rem]'>
        <FaXTwitter size={32}/>
        <FaGithub size={32}/>
        <FaLinkedin size={32}/>
        </div>
       </section>
       <section>
<Projects />
       </section>
    </div>
  )
}

export default MainInfoHolder;
