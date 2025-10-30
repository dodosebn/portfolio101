import React from "react";
import { IoIosLink } from "react-icons/io";
import type { pjProps } from "@/types";

const PjCont: React.FC<pjProps> = ({
  pjTitle,
  pjBio,
  pjStacks,
  pjPics,
  liveUrl,
}) => {
  return (
    <div className="p-2 lg:px-6">
      <main className="flex justify-center flex-col  gap-[2rem]">
        <section>
                 <img

            src={pjPics}
            alt={pjTitle}
            height={300}
            className="object-cover w-full"
          />
        </section>
        <section className="lg:text-start text-center">
          <h1 className="text-[#09090b]  font-bold pt-2 dark:text-[#fafafa]">
            {pjTitle}
          </h1>
          <p className="pt-1 text-[1rem] lg:text-[18px]">{pjBio}</p>
          <div className="pt-2">
            <h3 className="font-bold">Tech stack</h3>
            <ul className="flex flex-row flex-wrap gap-[0.5rem] pt-2">
              {pjStacks.map((stack: string, index: number) => (
                <li
                  key={index}
                  className="rounded-xl text-[1rem] bg-[#1f2937] text-white px-[0.5rem] py-[0.5rem] "
                >
                  {stack}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-[1rem] pt-4">
          
            <button className="bg-[#42674f] text-[#e6e6e6] px-2 py-[0.3rem] rounded-md flex gap-[0.5rem]">
              <span className="pt-[0.15rem]">
                <IoIosLink />
              </span>{" "}
              <a href={liveUrl}>Live</a>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PjCont;
