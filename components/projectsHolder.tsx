'use client';
import React, { useState, useEffect } from 'react';
import pjMaps from '@/app/Projects/pjEasyAdd'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PjCont from '@/app/Projects/projCont';

const ProjectsHolder = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % pjMaps.length); 
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + pjMaps.length) % pjMaps.length); 
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000); 
    return () => clearInterval(autoSlide); 
  }, []);

  return (
    <div className="bg-[#ffffff] dark:bg-[#09090b]">
      <h1 className='dark:text-[#fafafa]'>Here is a selection of side projects I enjoyed building.</h1>
      <div className="flex items-center justify-between relative border-[1px] border-[#fafafa] bg-white dark:bg-[#111114] p-2 rounded-xl shadow-custom overflow-hidden">
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
            repoUrl={pjMaps[slideIndex].repoUrl}
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
