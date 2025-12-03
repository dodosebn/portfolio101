import React from "react";
import { IoIosLink } from "react-icons/io";
import type { pjProps } from "@/types";
import { HiArrowUpRight } from "react-icons/hi2";

const PjCont: React.FC<pjProps> = ({
  pjTitle,
  pjBio,
  pjStacks,
  liveUrl,
}) => {
  return (
 <section
  className="relative bg-[#f8f8f8] hover:bg-white/90 dark:bg-[#151515] dark:hover:bg-black/90 rounded-md shadow-lg 
  hover:shadow-xl transition-all duration-300 p-6 border border-gray-400 dark:border-gray-700 
  group w-full h-[320px] flex flex-col justify-between"
>
  <span className="absolute bottom-0 left-0 w-80 h-[3px] rounded-full bg-black/90 dark:bg-white dark:bg-[#d8d2d2] 
    scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>

  <div className="mb-4">
    <h1 className="text-[#09090b] font-bold text-xl dark:text-[#fafafa] mb-2">
      {pjTitle}
    </h1>

    <div className="mb-4">
      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
        {pjStacks.map((stack: string, index: number) => (
          <span key={index}>
            {stack}
            {index < pjStacks.length - 1 && " + "}
          </span>
        ))}
      </p>
    </div>
  </div>

  <div className="mb-6">
    <p className="text-gray-600 dark:text-[#f1f1f1] leading-relaxed text-[15px]">
      {pjBio}
    </p>
  </div>

  {/* View Project Button */}
  <div className="flex gap-3 pt-2">
    <button className="text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 
      hover:text-[#fafafa]"
    >
      <a
        href={liveUrl}
        className="font-medium transition-all duration-300 group-hover:underline"
      >
        View Project
      </a>

      <span className="pt-0.5 transition-transform duration-300 group-hover:translate-x-1">
        <HiArrowUpRight className="text-lg" />
      </span>
    </button>
  </div>
</section>

  );
};

export default PjCont;