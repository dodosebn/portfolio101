import { useState } from "react"; 
import { IoBuild, IoMoonOutline } from "react-icons/io5";
import { MdOutlineConnectWithoutContact, MdOutlineWbSunny } from "react-icons/md";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useTheme } from "./themeProvider";
import Logo from "./utils/logo";
import { ThemeToggle } from "./customs/useTheme";
import { Link } from "@tanstack/react-router";
import { RiHome5Fill } from "react-icons/ri";
import { FaCode, FaUserAstronaut } from "react-icons/fa6";

export const clientOnly = true;

const Navigations = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLinks = [
    { name: "Home", href: "/", icon: <RiHome5Fill size={20} /> },
    { name: "About", href: "#About", icon: <FaUserAstronaut size={20} /> },
    { name: "Skills", href: "#Skills" , icon: <IoBuild size={20} /> },
    { name: "Projects", href: "#Projects", icon: <FaCode size={20} /> },
    { name: "Contact", href: "#Contact", icon: <MdOutlineConnectWithoutContact size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#151515]/90 shadow-md lg:px-16 flex justify-between items-center max-w-[1500px] mx-auto p-3">

      <div className={mobileMenuOpen ? "hidden md:block" : "block"}>
        <Logo />
      </div>

      <button
        type="button"
        className="md:hidden p-2 z-50 relative"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <BiX size={32} /> : <BiMenuAltRight size={32} />}
      </button>

      <div className="hidden md:flex items-center gap-4">
        <ul className="flex flex-row gap-6 navbar dark:border-[#e5e7eb] p-3 rounded-sm whitespace-nowrap">
          {NavLinks.map((link) => (
            <li
              key={link.name}
              className="dark:text-gray-300 hover:text-black/90 dark:hover:text-white transition-all rounded-md"
            >
             <Link 
  to={link.href} 
  className="flex items-center gap-2 p-2 px-4
     dark:hover:border-gray-700 hover:border hover:rounded-full
     transition-all duration-100 "
>
  <span className="text-xl">{link.icon}</span>
  <span className="text-lg font-medium">{link.name}</span>
</Link>

            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex">
        <ThemeToggle />
      </div>

     
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden
        ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className={`px-6 flex flex-col gap-4 py-4 transition-all duration-500 
          bg-white dark:bg-[#151515]
          ${mobileMenuOpen ? "translate-y-0" : "-translate-y-3"}
          `}
        >
          {NavLinks.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-4 p-4 transition-all border  
              border-gray-700/20 dark:border-gray-200/30"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-lg font-medium">{item.name}</span>
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-4 p-4 transition-all border  
            dark:border-gray-200/30 border-gray-700/20"
          >
            {theme === "light" ? (
              <>
                <IoMoonOutline size={22} />
                <span className="text-lg">Dark Mode</span>
              </>
            ) : (
              <>
                <MdOutlineWbSunny size={28} />
                <span className="text-lg">Light Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigations;
