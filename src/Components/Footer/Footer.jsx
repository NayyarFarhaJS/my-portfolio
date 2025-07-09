import React from 'react'
import { MdOutlineEmail,MdPhoneIphone } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub,FaRegSmile } from 'react-icons/fa'

function Footer() {
  return (
    <div id="Footer" className='flex justify-around bg-[#465697 text-white p-10 md:p-12 
    items-center'>
        <div>
            <h2 className='text-2xl md:text-6xl font-bold'>Contact</h2>
            <h3 className='text-sm md:text-2xl font-normal flex items-center gap-2'>
              Feel Free To Reach Out!<FaRegSmile />
            </h3>
        </div>
        <ul className='text-sm md:text-xl '>
          <li className='flex gap-1 items-center'>
            <MdOutlineEmail  size={20}/>
            farhanayyar.ui@gmail.com
          </li>
            <li className='flex gap-1 items-center'>
            <CiLinkedin  size={20}/>
            www.linkedin.com/in/nayyar-farha
          </li>
            <li className='flex gap-1 items-center'>
            <FaGithub  size={20}/>
            https://github.com/NayyarFarhaJS
          </li>
              <li className='flex gap-1 items-center'>
            <MdPhoneIphone  size={20}/>
              +1 302-250-5149
          </li>
        </ul>
    </div>
  )
}

export default Footer