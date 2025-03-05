import React from 'react'
import PjCont from './projCont';
import pjMaps from './pjEasyAdd';
const Projects = () => {
  return (
    <div className=' p-1 lg:px-16'>
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {pjMaps.length > 0 ? (
      pjMaps.map((pj) => <PjCont key={pj.id} {...pj} />)
    ) : (
      <div className="col-span-2 text-center py-12 text-gray-500">
        New projects coming soon!
      </div>
    )}
  </main>
  </div>
  )
}
export default Projects;
