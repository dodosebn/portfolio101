'use client';
import { FaReact, FaSass, FaGithub, FaJs, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import StackSty from '../utils/stackSty';

interface IconData {
  component: React.ComponentType<{ className?: string }>;
  name: string;
}

const StackAnima = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const icons: IconData[] = [
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
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [isMounted, inView]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const radius = isMobile ? 100 : 200;

  if (!isMounted) {
    return (
      <div
        ref={observerTarget}
        className="stack-container absolute z-10 flex flex-wrap gap-[2rem] text-red-500 dark:text-purple-400"
      >
        {icons.map(({ component: Icon, name }) => (
          <div className="text-3xl lg:text-4xl" key={name}>
            <StackSty stackName={Icon} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={observerTarget}
      className={`stack-container absolute ${isMobile ? 'top-[11rem]' : 'top-[17.5rem]'} z-10 flex items-center justify-center w-full h-[400px] ${
        inView ? 'orbit' : ''
      }`}
      style={
        inView
          ? {
              position: 'relative',
              animation: 'orbit-animation 10s linear infinite',
              transformOrigin: 'center center',
            }
          : {}
      }
    >
      {icons.map(({ component: Icon, name }, index) => {
        const angle = (index / icons.length) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={name}
            className="text-3xl lg:text-4xl absolute"
            style={
              inView
                ? {
                    transform: `translate(${x}px, ${y}px)`,
                    animationDelay: `${index * 0.2}s`,
                  }
                : {}
            }
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
