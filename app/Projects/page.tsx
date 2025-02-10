import React from 'react'
import PjCont from './projCont';
import pjMaps from './pjEasyAdd';
const Projects = () => {
  return (
    <div className="p-6 lg:px-16 bg-[#ffffff]">
      <h1>Here is a selection of side projects i enjoyed building.</h1>
{pjMaps.map((pj) => (
<PjCont key={pj.id} pjTitle={pj.pjTitle} pjBio={pj.pjBio} pjPics={pj.pjPics} liveUrl={pj.liveUrl} repoUrl={pj.repoUrl} pjStacks={pj.pjStacks}/>
))};
    </div>
  )
}

export default Projects;
