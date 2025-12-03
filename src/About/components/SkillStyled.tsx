import SkillHol from './customs/skillHol'
import { FaSass } from "react-icons/fa";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaDocker } from "react-icons/fa";

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
        },
        {
          id: 11,
          name: 'Node Js',
          icon: IoLogoNodejs
        }, 
        {
          id: 12,
          name: 'Docker',
          icon:  FaDocker
        },
        {
          id: 13,
          name: 'Firebase',
          icon:SiFirebase    
          
        }
    ]
  return (
    <div className='flex gap-6 flex-wrap pt-4' >
    {stacks.map((stackoo, index) => (
      <div key={`${stackoo.id}-${index}`} >
        <SkillHol name={stackoo.name} stackName={stackoo.icon}/>
      </div>
    ))}
  </div>

  )
}

export default SkillStyled




