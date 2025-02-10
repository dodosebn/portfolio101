import React from 'react'
// import htmlIcon from '@/public/imgs/html.png';
// import cssIcon from '@/public/imgs/css.jpeg';
import jsIcon from '@/public/imgs/jsts.webp';
import sassIcon from '@/public/imgs/sass.png';
import tailIcon from '@/public/imgs/tailwind.png';
import reactIcon from '@/public/imgs/react.svg';
import nextIcon from '@/public/imgs/next js.jpeg';
import gitIcon from '@/public/imgs/github.png';
import StackSty from './stackSty';
const StackAnima = () => {
    const icons = [jsIcon, sassIcon, tailIcon,reactIcon,nextIcon,gitIcon];
  return (
<div className='absolute z-10 flex gap-[2rem]'>
          {icons.map((icon, index) => (
            <StackSty stackName={icon} key={index}/>
          ))}
        </div>
  )
}

export default StackAnima;
