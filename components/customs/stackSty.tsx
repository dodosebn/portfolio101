import React from 'react'
import { stackStyProps } from '@/types';
import Image from 'next/image';
const StackSty = ({stackName}: stackStyProps) => {
  return (
    <div>
        <Image src={stackName} alt="yoh" className='w-[15em] lg:w-[5rem] h-[2rem] lg:h-[5rem] object-cover'/>
    </div>
  )
}

export default StackSty;
