'use client';
import { useEffect, useState } from 'react';
import {
  FaReact, FaSass, FaGithub, FaJs, FaHtml5,
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import StackSty from '../utils/stackSty';

const StackAnima = () => {
  const [angle, setAngle] = useState(0);
  
  const icons = [
    FaHtml5, IoLogoCss3, FaJs, BiLogoTypescript,
    FaSass, RiTailwindCssFill, FaReact, SiNextdotjs, FaGithub,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => (prev + 0.5) % 360); // Slower rotation
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {icons.map((Icon, index) => {
        const theta = (index / icons.length) * 2 * Math.PI + (angle * Math.PI / 180);
        const distance = 7.5; // Distance from center in rem units
        const x = Math.cos(theta) * distance;
        const y = Math.sin(theta) * distance;
        
        return (
          <div
            key={`stack-icon-${index}`}
            className="absolute text-red-500 dark:text-purple-400 text-2xl lg:text-4xl"
            style={{
              left: `calc(50% + ${x}rem)`,
              top: `calc(50% + ${y}rem)`,
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.2s ease-out',
              zIndex: 5
            }}
          >
            <StackSty stackName={Icon} />
          </div>
        );
      })}
    </div>
  );
};

export default StackAnima;
