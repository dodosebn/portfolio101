import React from 'react';

interface Props {
  name: string;
  icon: React.ComponentType 
}

const ImButton: React.FC<Props> = ({ name, icon: Icon }) => {
  return (
    <>
      <button className='bg-[#fafafa] dark:bg-[#020615] dark:dark-gradient
        dark:border dark:border-[#d9d9d9]
 shadow-custom rounded-lg p-[0.4rem] lg:p-2 text-lg lg:text-2xl flex gap-[0.40rem] lg:gap-3'>
      <span className='mt-1'><Icon /></span>{name}</button>
    </>
  );
};

export default ImButton;
