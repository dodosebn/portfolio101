import { Link } from "@tanstack/react-router";
import { IoDocumentTextOutline } from "react-icons/io5";

const Logo = () => {
  return (
    <div className="logo-container relative inline-block cursor-pointer">
      <div className="flex gap-1 items-center">
        <a href="public/doc/Orji-Dominion-Resume.pdf" target="_blank">
          <IoDocumentTextOutline size={19} className="dark:text-[#FFA500] text-[#f1c40f] transition" />
        </a>

        <Link
          to="/"
          className="text-[17px] font-bold dark:text-gray-300 "
        >
          Dominion
        </Link>
      </div>

    </div>
  );
};

export default Logo;
