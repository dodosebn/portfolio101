import React from 'react'
// import { stackStyProps } from '@/types';
interface SkillHolProps {
    name: string;
    stackName: React.ComponentType ;
}
const SkillHol  = ({name, stackName: IconComponent}: SkillHolProps) => {
  return (
    <div className='rounded-lg bg-[#09090b] text-white py-1 px-2 flex gap-1'>
         <div  className='text-2xl pt-[0.19rem]'>< IconComponent /></div>  
     <div> {name}</div>
    </div>
  )
}

export default SkillHol;








