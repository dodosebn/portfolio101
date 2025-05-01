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

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (!isMounted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !inView) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (observerTarget.current) observer.observe(observerTarget.current);
    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [isMounted, inView]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // target smaller screens more accurately
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const orbitRadius = isMobile ? 70 : 150;

  return (
    <div
      ref={observerTarget}
      className={`stack-container relative mx-auto mt-10 w-fit h-[${orbitRadius * 2}px]`}
    >
      <div
        className={`absolute inset-0 z-10`}
        style={{
          animation: inView ? 'orbit-animation 10s linear infinite' : undefined,
          transformOrigin: 'center center',
        }}
      >
        {icons.map(({ component: Icon, name }, index) => {
          const angle = (index * (360 / icons.length)) * (Math.PI / 180);
          const x = Math.cos(angle) * orbitRadius;
          const y = Math.sin(angle) * orbitRadius;
          return (
            <div
              key={name}
              className="absolute text-3xl lg:text-4xl"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <StackSty stackName={Icon} />
            </div>
          );
        })}
      </div>
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
