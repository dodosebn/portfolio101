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
    FaHtml5,
    IoLogoCss3,
    FaJs,
    BiLogoTypescript,
    FaSass,
    RiTailwindCssFill,
    FaReact,
    SiNextdotjs,
    FaGithub,
  ];

  return (
    <div className='absolute z-10 flex flex-wrap gap-[2rem] text-red-500'>
      {icons.map((IconComponent, index) => (
        <div className='text-xl'>
        <StackSty stackName={IconComponent} key={index} />
        </div>
      ))}
    </div>
  );
};

export default StackAnima;
