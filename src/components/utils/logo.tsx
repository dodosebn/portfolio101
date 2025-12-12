import { Link } from "@tanstack/react-router";
import { IoDocumentTextOutline } from "react-icons/io5";

const Logo = () => {
  return (
    <div className="logo-container inline-block cursor-pointer">
      <div className="flex items-center gap-2">
        {/* Resume Icon */}
        <a
          href={`${process.env.PUBLIC_URL}/doc/OrjiDominion.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-all duration-300"
        >
          <IoDocumentTextOutline
            size={22}
            className="text-[#f1c40f] dark:text-[#FFA500] transition-colors duration-300"
          />
        </a>

        {/* Logo Text with Gradient */}
        <Link
          to="/"
          className="text-[17px] uppercase font-bold 
                     bg-gradient-to-r from-green-500 via-green-400 to-yellow-400 
                     dark:from-green-400 dark:via-green-500 dark:to-yellow-500
                     bg-clip-text text-transparent
                     transition-all duration-300 transform hover:scale-105"
        >
          Dominion
        </Link>
      </div>
    </div>
  );
};

export default Logo;
