import React, { useState } from "react";

const AboutMeMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="About">
      <h1 className="lg:text-3xl text-center text-2xl py-5">
        Who’s Behind the Code?💡
      </h1>

      <div className="pt-2 flex md:flex-row flex-col gap-6">
        <section>
          <img
            src="/imgs/image-beside.png"
            alt="all done"
            className="cursor-pointer shadow-lg"
            onClick={() => setIsOpen(true)}
          />
        </section>

        <section className="pt-3 px-5 md:px-3">
       <p className="text-start" style={{ lineHeight: "1.75rem" }}>
  I’m a 19-year-old university student by day and a{" "}
  <span className="italic font-bold text-xl inline-block bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent text-[1.25rem]">
    creative developer
  </span>{" "}
  by night. I’m passionate about software development—bringing pixel-perfect
  designs to life, crafting user-friendly and visually appealing interfaces, and
  building features that truly{" "}
  <span className="italic font-bold text-xl inline-block bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent text-[1.25rem]">
    enhance usability
  </span>
  . Guided by accessibility, caching, and responsiveness, I focus on creating web
  applications that perform efficiently. Over the past two years, I’ve honed these
  skills through hands-on experience.
</p>

        </section>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 transition"
            >
              ✕
            </button>

            <img
              src="/imgs/ebn1 (2).jpg"
              alt="all done enlarged"
              className="max-w-[90vw] max-h-[90vh] shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMeMain;
