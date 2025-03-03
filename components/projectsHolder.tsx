'use client';
import React from 'react'
import { useState } from 'react';
import pjMaps from '@/app/Projects/pjEasyAdd';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';  
import PjCont from '@/app/Projects/projCont';
const ProjectsHolder = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    if (slideIndex < pjMaps.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className=" bg-[#ffffff]">
      <h1>Here is a selection of side projects I enjoyed building.</h1>
      <div className="flex items-center justify-between relative bg-white p-2 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1),0_-1px_3px_rgba(0,0,0,0.1),1px_0_3px_rgba(0,0,0,0.1),-1px_0_3px_rgba(0,0,0,0.1)]">
        <div className='pr-2 bg-[#09090b] text-white rounded-full p-2'>
        <FaChevronLeft size={20} onClick={prevSlide} />
        </div>
        <div>
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
        <div className='pr-2 bg-[#09090b] text-white rounded-full p-2'>
        <FaChevronRight size={20} onClick={nextSlide} />
        </div>
      </div>
    </div>

  )
}

export default ProjectsHolder;
