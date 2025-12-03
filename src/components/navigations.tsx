import { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useTheme } from "./themeProvider";
import Logo from "./utils/logo";
import { ThemeToggle } from "./customs/useTheme";
import { Link } from "@tanstack/react-router";

export const clientOnly = true;

const Navigations = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
  ];

  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#151515]/90 shadow-md lg:px-16 flex justify-between items-center max-w-[1500px] mx-auto p-3">
      <div className={mobileMenuOpen ? "hidden md:block" : "block"}>
        <Logo />
      </div>

      <button
        type="button"
        className="md:hidden p-2 pt-5"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <BiX size={28} /> : <BiMenuAltRight size={28} />}
      </button>

      <div className="hidden md:flex items-center gap-4">
        <ul className="flex flex-row gap-6 navbar
         dark:border-[#e5e7eb] p-3 rounded-sm whitespace-nowrap">
          {NavLinks.map((link) => (
            <li
              key={link.name}
              className=" dark:text-gray-300
               hover:text-black dark:hover:text-white transition-all"
            >
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex">
        <ThemeToggle />
      </div>

      {mobileMenuOpen && (
        <div className="w-full pt-5  md:hidden">
          <ul className="flex gap-3 px-3 pb-2 dark:text-gray-200">
            {mobileNavLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#1f2938] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <button type="button" onClick={toggleTheme} className="px-2">
              {theme === "light" ? (
                <IoMoonOutline size={26} />
              ) : (
                <MdOutlineWbSunny size={26} />
              )}
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigations;
