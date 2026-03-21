import ImButton from "./customs/imButton";
import { FaBookReader } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import TransitionLink from "./utils/transitionLink";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import ConventionDiv from "./utils/conventionDiv";
import { motion } from "framer-motion";

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse rounded-lg bg-white/10 ${className}`} />
);

const MainInfoHolderSkeleton = () => (
  <div className="text-center pt-14 md:pt-20 max-w-375">
    <main className="flex flex-col md:flex-row justify-between gap-8">
      {/* Left */}
      <section className="px-5 md:flex-1 space-y-4">
        <Skeleton className="w-20 h-20 rounded-full" />
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-6 w-64" />
        <Skeleton className="h-16 w-full" />
        <div className="flex gap-3 pt-1">
          <Skeleton className="h-10 w-28 rounded-full" />
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </section>

      {/* Right */}
      <section className="px-4 md:px-12 bg-[#111]/40 rounded-xl py-4 w-full md:w-auto">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4 gap-2">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="w-7 h-7 rounded-full" />
            ))}
          </div>
          <Skeleton className="h-4 w-48" />
        </div>
      </section>
    </main>
  </div>
);

const MainInfoHolder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate assets ready — fires after first paint + image load
    const img = new Image();
    img.src = "/imgs/dominion.jpeg";
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true); // still show content if image fails
  }, []);

  const convetionContents: Array<{ h3content: string; pcontent: string; variant: 'green' | 'gold' }> = [
    { h3content: '99%', pcontent: 'Success Rate', variant: 'green' },
    { h3content: '10+', pcontent: 'Total Projects', variant: 'gold' },
    { h3content: '4-6 Weeks', pcontent: 'Avg. Delivery', variant: 'gold' },
    { h3content: '8+', pcontent: 'Happy Clients', variant: 'green' },
  ];

  const flag = [
    '/imgs/usflag.webp',
    '/imgs/ngflag.png',
    '/imgs/caflag.png',
    '/imgs/saflag.png',
    '/imgs/ukflag.png',
  ];

  if (!loaded) return <MainInfoHolderSkeleton />;

  return (
    <motion.div
      className="text-center pt-14 md:pt-20 max-w-375"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <main className="flex flex-col md:flex-row justify-between gap-8">

        <section className="px-5 md:flex-1">
          <div>
            <img
              src="/imgs/dominion.jpeg"
              alt="Dominion"
              className="cursor-pointer shadow-lg w-20 h-20 rounded-full object-cover"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <div className="space-y-2 pt-2">
            <h1 className="text-black text-start text-2xl font-bold dark:text-[#f1f1f1]">
              Hey, I'm Dominion.
            </h1>
            <div className="text-left">
              <Link
                to="/"
                className="inline-block italic font-bold text-xl
                  bg-linear-to-r from-green-500 via-green-400 to-yellow-400
                  dark:from-green-400 dark:via-green-500 dark:to-yellow-500
                  bg-clip-text text-transparent
                  transition-all duration-300 transform hover:scale-105"
              >
                Your Next Software Developer
              </Link>
            </div>
          </div>
          <p className="text-start leading-8">
            I build scalable web applications for businesses, combining software
            engineering with a strong foundation in{" "}
            <span className="italic font-bold bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
              Statistics
            </span> to deliver reliable results.
          </p>
          <div className="py-4 flex justify-start gap-[0.35rem] md:gap-4">
            <TransitionLink href="#Contact">
              <ImButton name="Hire Me" icon={TbMessages} />
            </TransitionLink>
            <a href="/doc/OrjiDominion.pdf" target="_blank" rel="noopener noreferrer">
              <ImButton name="View Resume" icon={FaBookReader} />
            </a>
          </div>
        </section>

        <motion.section
          className="px-4 md:px-12 bg-[#111]/40 rounded-xl py-4 w-full md:w-auto"
          animate={{
            x: [0, 8, -4, 10, -3, 6, -8, 3, 0],
            y: [0, -6, 9, -4, 11, -7, 5, -10, 0],
          }}
          transition={{
            duration: 28,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            times: [0, 0.12, 0.25, 0.38, 0.5, 0.63, 0.75, 0.88, 1],
          }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {convetionContents.map((content, index) => (
              <ConventionDiv
                key={index}
                h3content={content.h3content}
                pcontent={content.pcontent}
                variant={content.variant}
              />
            ))}
          </div>

          <div className="flex items-center mt-4 md:mx-6 md:gap-3 gap-1">
            <div className="flex -space-x-2">
              {flag.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="flag"
                  className="rounded-full w-7 h-7 border border-white/10 shadow-sm"
                />
              ))}
            </div>
            <p className="text-sm font-medium tracking-wide text-white/60">
              Trusted by{" "}
              <span className="bg-linear-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent font-semibold">
                Business Owners
              </span>{" "}
              Worldwide
            </p>
          </div>
        </motion.section>

      </main>
    </motion.div>
  );
};

export default MainInfoHolder;