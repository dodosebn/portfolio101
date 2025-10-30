'use client';

import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "../themeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
      <div
        className='dark:border-[#e5e7eb] border border-[#1f2937]
         dark:text-[#fafafa] px-3 py-2 rounded-sm shadow-sm'
      >
    <button type="button" onClick={toggleTheme}>
      {theme === "light" ? (
        <IoMoonOutline size={24} />
      ) : (
        <MdOutlineWbSunny size={24} />
      )}
    </button>
    </div>
  );
}