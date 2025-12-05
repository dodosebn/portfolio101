import { useEffect, useRef, useState } from "react";

const CusorWrite = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef(0);

  const mouse = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(Date.now());

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Hide default cursor on the entire document
  useEffect(() => {
    if (!isDesktop) return;
    
    // Hide cursor on the entire body
    document.body.style.cursor = 'none';
    
    return () => {
      // Restore cursor when component unmounts
      document.body.style.cursor = 'auto';
    };
  }, [isDesktop]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = Date.now();
    };

    const animate = () => {
      const distX = mouse.current.x - circlePos.current.x;
      const distY = mouse.current.y - circlePos.current.y;

      circlePos.current.x += distX * 0.15;
      circlePos.current.y += distY * 0.15;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circlePos.current.x - 20}px, ${circlePos.current.y - 20}px)`;
      }

      const timeSinceMove = Date.now() - lastMoveTime.current;

      if (dotRef.current) {
        if (timeSinceMove < 500) {
          const angle = Math.atan2(distY, distX);
          const orbitX = Math.cos(angle) * 2;
          const orbitY = Math.sin(angle) * 2;
          dotRef.current.style.transform = `translate(${mouse.current.x + orbitX - 4}px, ${mouse.current.y + orbitY - 4}px)`;
        } else {
          dotRef.current.style.transform = `translate(${circlePos.current.x - 4}px, ${circlePos.current.y - 4}px)`;
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer circle */}
      <div
        ref={circleRef}
        className="fixed w-10 h-10 rounded-full border border-[#f76c08a1] pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full bg-[#f4a46ba1] pointer-events-none z-[9999] transition-transform duration-200 ease-out"
      />
    </>
  );
};

export default CusorWrite;