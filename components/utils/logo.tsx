import React from "react";
import TransitionLink from "./transitionLink";

const Logo = () => {
  const letters = [
    { char: "D", offset: -2, delay: 0 },
    { char: "o", offset: -4, delay: 0.1 },
    { char: "d", offset: -2, delay: 0.2 },
    { char: "o", offset: 0, delay: 0.3 },
    { char: "'", offset: 2, delay: 0.4 },
    { char: "s", offset: 4, delay: 0.5 },
  ];

  return (
    <div className="logo-container relative inline-block font-bold">
      <div className="flex">
        {letters.map(({ char, offset, delay }) => (
          <TransitionLink href="/" key={char + offset}>
            <span
              key={char + offset}
              className={`
              inline-block relative text-transparent bg-clip-text
              bg-gradient-to-r from-red-500 via-red-600 to-red-700
              dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-500 dark:to-pink-500
            `}
              style={{
                transform: `translateY(${offset}px)`,
                marginLeft: offset !== -2 ? "-0.2rem" : "0",
                animation: "gradient-x 15s ease infinite",
                animationDelay: `${delay}s`,
                backgroundSize: "200% 200%",
              }}
            >
              {char}
            </span>
          </TransitionLink>
        ))}
      </div>

      <style jsx>{`
        .logo-container {
          font-family: "Montserrat", "Playfair", sans-serif;
          font-size: 2.25rem;
        }

        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
