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
  const [isMounted, setIsMounted] = useState(false);
  const [angle, setAngle] = useState(0);
  const icons = [
    FaHtml5, IoLogoCss3, FaJs, BiLogoTypescript,
    FaSass, RiTailwindCssFill, FaReact, SiNextdotjs, FaGithub,
  ];

  const radius = typeof window !== 'undefined' && window.innerWidth < 1024 ? 90 : 180;

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setAngle(prev => (prev + 1) % 360);
    }, 50); 
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2"
      style={{
        top: '11.5rem', 
      }}
    >
      <div className="relative w-[0px] h-[0px]">
        {icons.map((Icon, index) => {
          const theta = (index / icons.length) * 2 * Math.PI + (angle * Math.PI / 180);
          const x = Math.cos(theta) * radius;
          const y = Math.sin(theta) * radius;
          return (
            <div
              key={index}
              className="absolute text-red-500 dark:text-purple-400 text-2xl lg:text-4xl"
              style={{
                transform: `translate(${x}px, ${y}px)`,
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
