'use client';
import {
  FaReact,
  FaSass,
  FaGithub,
  FaJs,
  FaHtml5,
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import StackSty from '../utils/stackSty';

const StackAnima = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const radius = isMobile ? 100 : 200;

  if (!isMounted) return null;

  return (
    <div
      className={`absolute left-1/2 top-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] -translate-x-1/2 -translate-y-1/2 ${
        inView ? 'orbit' : ''
      }`}
      style={{
        animation: inView ? 'orbit-animation 15s linear infinite' : '',
        transformOrigin: 'center center',
      }}
    >
      {icons.map(({ component: Icon, name }, index) => {
        const angle = (index / icons.length) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div
            key={name}
            className="absolute text-3xl lg:text-4xl text-red-500 dark:text-purple-400"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <StackSty stackName={Icon} />
          </div>
        );
      })}
      <style jsx global>{`
        @keyframes orbit-animation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default StackAnima;
