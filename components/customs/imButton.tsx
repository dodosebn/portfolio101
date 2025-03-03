import React from 'react';

interface Props {
  name: string;
}

const ImButton: React.FC<Props> = ({ name }) => {
  return (
    <>
      <button className='bg-[#d3d3d3] rounded-lg p-[0.7rem] text-lg lg:text-2xl'>{name}</button>
    </>
  );
};

export default ImButton;
