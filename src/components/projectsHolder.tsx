import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import pjMaps from "@/Projects/pjEasyAdd";
import PjCont from "@/Projects/projCont";

const ProjectsHolder = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % pjMaps.length);
  };

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + pjMaps.length) % pjMaps.length
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="bg-[#fff] dark:bg-black/90 dark:dark-gradient">
      <h1 className="dark:text-[#61584c]">
        Here is a selection of side projects I enjoyed building.
      </h1>
      <div className="flex items-center justify-between relative border border-[#fafafa]
       bg-white dark:bg-[#111114] p-2 rounded-xl shadow-custom overflow-hidden">
        <div className="pr-2 bg-[#09090b] text-white rounded-full p-2 cursor-pointer">
          <FaChevronLeft size={20} onClick={prevSlide} />
        </div>

        <div className="relative w-full flex justify-center items-center">
          <PjCont
            key={pjMaps[slideIndex].id}
            pjTitle={pjMaps[slideIndex].pjTitle}
            pjBio={pjMaps[slideIndex].pjBio}
            pjPics={pjMaps[slideIndex].pjPics}
            liveUrl={pjMaps[slideIndex].liveUrl}
            pjStacks={pjMaps[slideIndex].pjStacks}
          />
        </div>

        <div className="pr-2 bg-[#09090b] text-white rounded-full p-2 cursor-pointer">
          <FaChevronRight size={20} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsHolder;
