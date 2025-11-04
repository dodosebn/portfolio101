'use client';
import { useEffect, useState } from 'react';
import {
  FaReact, FaSass, FaGithub, FaJs, FaHtml5,
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

import StackSty from '../utils/stackSty';

const StackAnima = () => {
  const [angle, setAngle] = useState(0);

  const icons = [
    FaHtml5, IoLogoCss3, FaJs, BiLogoTypescript,
    FaSass, RiTailwindCssFill, SiFirebase, FaReact, SiNextdotjs, FaGithub, RiSupabaseFill, IoLogoNodejs, SiJquery, FaDocker
  ];

  const radius = typeof window !== 'undefined' && window.innerWidth < 1024 ? 110 : 210;

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => (prev + 1) % 360);
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="relative w-full h-full">
        {icons.map((Icon, index) => {
          const theta = (index / icons.length) * 2 * Math.PI + (angle * Math.PI / 180);
          const x = Math.cos(theta) * radius;
          const y = Math.sin(theta) * radius;

          return (
            <div
              key={index}
              className="absolute text-red-500 dark:text-[#4d453b] text-2xl lg:text-4xl"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
            >
              <StackSty stackName={Icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackAnima;