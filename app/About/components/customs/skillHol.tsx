import { SkillHolProps } from '@/types';
import React from 'react'

const SkillHol  = ({name, stackName: IconComponent}: SkillHolProps) => {
  return (
    <div className='rounded-lg bg-[#09090b] dark:bg-[#1f2937] text-white py-1 px-2 flex gap-1'>
         <div  className='text-2xl pt-[0.19rem]'>< IconComponent /></div>  
     <div> {name}</div>
    </div>
  )
}

export default SkillHol;








