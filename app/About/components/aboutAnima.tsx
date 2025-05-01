import React from 'react';
import { BiLogoTypescript } from "react-icons/bi";
import { FaSass, FaReact, FaGithub, FaJs, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import StackSty from '@/components/utils/stackSty';

interface StackAnimaProps {
  className: string;
}

const AboutAnima: React.FC<StackAnimaProps> = ({ className }) => {
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
    <div className={className}>
      {icons.map(({ component: Icon, name }, index) => (
        <div
          key={name}
          className="text-3xl lg:text-4xl animate-updown"
          style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
        >
          <StackSty stackName={Icon} />
        </div>
      ))}
    </div>
  );
};

export default AboutAnima;
