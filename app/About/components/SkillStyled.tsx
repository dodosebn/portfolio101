import React from 'react'
import SkillHol from './customs/skillHol'
import { FaSass } from "react-icons/fa";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
const SkillStyled = () => {
   const stacks =  [
        {
            id: 1,
            name: 'Html',
            icon: FaHtml5
        },
        {
            id: 2,
            name: 'Css',
            icon: IoLogoCss3
        },
        {
            id: 3,
            name: 'JavaScript',
            icon:  FaJs 
        },
        {
            id: 4,
            name: 'TypeScript',
            icon: BiLogoTypescript 
        },
        {
            id: 5,
            name: 'Sass',
            icon: FaSass
        },
        {
            id: 6,
            name: 'Tailwind',
            icon: RiTailwindCssFill 
        },
        {
            id: 7,
            name: 'React',
            icon: FaReact
        },
        {
            id: 8,
            name: 'Next Js',
            icon: SiNextdotjs
        },
        {
            id: 9,
            name: 'Version Control',
            icon: FaGithub
        },
        {
          id: 10,
          name: 'Supabase',
          icon: RiSupabaseFill
        }
    ]
  return (
    <div className='flex gap-6 flex-wrap pt-4'>
    {stacks.map((stackoo) => (
      <div key={stackoo.id} >
        <SkillHol name={stackoo.name} stackName={stackoo.icon}/>
      </div>
    ))}
  </div>

  )
}

export default SkillStyled




