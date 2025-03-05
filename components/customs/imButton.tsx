import React from 'react';
import { FaBookReader } from "react-icons/fa";

interface Props {
  name: string;
  icon: React.ComponentType 
}

const ImButton: React.FC<Props> = ({ name, icon: Icon }) => {
  return (
    <>
      <button className='bg-[#fafafa] shadow-custom rounded-lg p-[0.7rem] text-lg lg:text-2xl flex gap-2'>
      <span className='mt-1'><Icon /></span>{name}</button>
    </>
  );
};

export default ImButton;
