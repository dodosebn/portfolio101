import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import StackSty from '../utils/stackSty';
const ContactIcons = () => {
    const Icons = [
  { name: FaXTwitter,    id: 1},
  {name:FaGithub, id:2},
  {name:FaLinkedin, id:3},
  {name:IoMailOutline,  id:4},
    ];

  return (
    <div className='flex gap-[1rem]'>
            {Icons.map(({ name: Icon, id }) => (
        <div className='text-3xl lg:text-4xl border-2 border-[#1a1313] p-3 rounded-md' key={id}>
          <StackSty stackName={Icon} />
        </div>
      ))}
        </div>
  )
}

export default ContactIcons;
