// StackAnima.jsx
import React from 'react';
import { BiLogoTypescript } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import StackSty from './stackSty';

const StackAnima = () => {
  const icons = [
    { component: FaHtml5, name: 'HTML5' },
    { component: IoLogoCss3, name: 'CSS3' },
    { component: FaJs, name: 'JavaScript' },
    { component: BiLogoTypescript, name: 'TypeScript' },
    { component: FaSass, name: 'Sass' },
    { component: RiTailwindCssFill, name: 'TailwindCSS' },
    { component: FaReact, name: 'React' },
    { component: SiNextdotjs, name: 'Next.js' },
    { component: FaGithub, name: 'GitHub' },
  ];

  return (
    <div className='absolute z-10 flex flex-wrap gap-[2rem] text-red-500'>
      {icons.map(({ component: Icon, name }) => (
        <div className='text-3xl lg:text-4xl' key={name}>
          <StackSty stackName={Icon} />
        </div>
      ))}
    </div>
  );
};

export default StackAnima;
