import React from 'react';

const Logo = () => {
  const letters = [
    { char: 'D', offset: -2, delay: 0 },
    { char: 'o', offset: -4, delay: 0.1 },
    { char: 'd', offset: -2, delay: 0.2 },
    { char: 'o', offset: 0, delay: 0.3 },
    { char: "'", offset: 2, delay: 0.4 },
    { char: 's', offset: 4, delay: 0.5 }
  ];

  return (
    <div className="logo-container relative inline-block">
      <div className="flex">
        {letters.map(({ char, offset, delay }) => (
          <span 
            key={char + offset}
            className="logo-letter inline-block relative"
            style={{
              transform: `translateY(${offset}px)`,
              marginLeft: offset !== -2 ? '-0.2rem' : '0',
              animationDelay: `${delay}s`
            }}
          >
            {char}
          </span>
        ))}
      </div>
      
      <style jsx>{`
        .logo-container {
          font-family: 'Montserrat', 'Playfair', sans-serif;
        }
        
        .logo-letter {
          font-size: 2.25rem;
          font-weight: 700;
          background: linear-gradient(270deg, #3498db, #9b59b6, #e91e63);
          background-size: 200% 200%;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-x 15s ease infinite;
        }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Logo;