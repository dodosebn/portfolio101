import React, { useState } from "react";
const AboutMeMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="About">
      {" "}
      <h1 className="lg:text-3xl text-center text-2xl py-5">
        {" "}
        Who’s Behind the Code?💡{" "}
      </h1>{" "}
      <div className="pt-2 flex md:flex-row flex-col gap-6">
        {" "}
        <section className="flex-1">
          {" "}
          <img
            src="/imgs/image-beside.png"
            alt="all done"
            className="cursor-pointer shadow-lg"
            onClick={() => setIsOpen(true)}
          />{" "}
        </section>{" "}
        <section className="pt-3 px-5 md:px-3 flex-1">
          {" "}
          <p className="text-start leading-8">
            {" "}
            I’m a creative full-stack web developer passionate about software
            engineering and problem solving. I build scalable APIs, bring
            pixel-perfect designs to life, and craft user-friendly, visually
            appealing interfaces. With a background in{" "}
            <span className="italic font-bold bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
              {" "}
              Statistics{" "}
            </span>{" "}
            and a naturally analytical mindset, I focus on building features
            that truly{" "}
            <span className="italic font-bold bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
              {" "}
              enhance usability{" "}
            </span>{" "}
            and deliver real value.{" "}
          </p>{" "}
        </section>{" "}
      </div>{" "}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          {" "}
          <div className="relative">
            {" "}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 transition"
            >
              {" "}
              ✕{" "}
            </button>{" "}
            <img
              src="/imgs/ebn1 (2).jpg"
              alt="all done enlarged"
              className="max-w-[90vw] max-h-[90vh] shadow-2xl"
            />{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
};
export default AboutMeMain;
