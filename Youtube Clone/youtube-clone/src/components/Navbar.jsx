import React from 'react'
import Avatar from 'react-avatar';
import { FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from '../assets/logo.png'
import profile1 from '../assets/profile1.png'
const Navbar = () => {
  return (
    <div className='flex justify-between px-6 py-2 fixed top-0 w-[100%] bg-white'>
        <div className='flex items-center space-x-4'>
            <FaBars className='text-xl cursor-pointer' />
            <img src={logo} alt="" className='w-28 cursor-pointer' />
        </div>
        <div className='flex w-[35%] items-center'>
           <div className='w-[100%] px-3 py-2 border rounded-l-full'>
             <input type="text" placeholder='Search' className='outline-none ' />
           </div>
            <button className='px-4 py-2 border bg-gray-100 rounded-r-full cursor-pointer'>
                <CiSearch size={"24px"}/>
            </button>
            <IoMdMic size={"42px"} className='ml-3 border rounded-full p-2 hover:bg-gray-200 duration-200 cursor-pointer'/>
        </div>
        <div className='flex items-center space-x-5'>
            <RiVideoAddLine className='text-2xl cursor-pointer'/>
            <AiOutlineBell className='text-2xl cursor-pointer'/>
            {/* <img src={profile1} alt="" className='w-10 rounded-full' /> */}
            <Avatar src={profile1} size='32' round={true} className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default Navbar