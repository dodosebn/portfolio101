import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaCreativeCommons } from "react-icons/fa6";

const FooterReachOut = () => {
  return (
    <div className='flex justify-between border-t-[1.3px] border-gray-400 my-4 pt-2'>
   <div className='flex gap-2'>
    <span className='pt-1'><FaCreativeCommons /></span> <p>2025 Learning_Dodo's</p>
   </div>
   <div>
    <ul className='flex gap-2'>
        <li><IoMailOutline /></li>
        <li><FaLinkedin /></li>
        <li><FaGithub /></li>
        <li><FaXTwitter /></li>
    </ul>
   </div>
    </div>
  )
}

export default FooterReachOut;
