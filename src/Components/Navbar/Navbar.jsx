import React, { useEffect, useState } from 'react'
import {MdOutlineTravelExplore} from "react-icons/md"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

export const Navbar = () => {
    const[travel,setTravel]=useState(false);
    const handletravel=()=>{
        setTravel(!travel)
}
  return (
    <section className='mt-3 fixed top-[-12px] left-0 right-0 bottom-0 bg-white shadow-lg w-full h-16 z-50'>
        <div className='flex items-center w-full container mx-auto relative justify-between py-3 '>
            <div className='flex gap-3 items-center justify-center text-3xl font-bold'>
                <MdOutlineTravelExplore className='text-teal-700 '/>
                <a href="#"> Travel.</a>
            </div>
           <div className=' flex items-center justify-between '>
           <ul className='hidden md:flex items-center  font-bold cursor-pointer'>
                <li><a href="#" className='px-3 hover:text-gray-400'>Home</a> </li>
                <li><a href="#" className='px-3 hover:text-gray-400'>Shop</a> </li>
                <li><a href="#" className='px-3 hover:text-gray-400'>About</a> </li>
                <li><a href="#" className='px-3 hover:text-gray-400'>News</a> </li>
                <li><a href="#" className='px-3 hover:text-gray-400'>Contact</a> </li>
                <div className='w-36 text-center  bg-teal-500 rounded-full p-2 cursor-pointer hover:bg-blue-500'>
               <button className='text-center font-bold'>Shop Now</button>
            </div>
            </ul>
            
            <div onClick={handletravel} className='px-5 text-3xl block md:hidden'>
                {travel? (<AiOutlineClose/>):(<GiHamburgerMenu/>)}
            </div>
           </div>
           <div className={travel ? 'flex left-0 z-50  top-14 h-screen items-center justify-center w-56 bg-white shadow-lg fixed ease-in-out duration-500' :'fixed left-[-100%]'}>
           <ul className='space-y-5 text-3xl '>
                <li><a href="#" className='p-3 hover:text-gray-500'>Home</a> </li>
                <li><a href="#" className='p-3 hover:text-gray-500'>Shop</a> </li>
                <li><a href="#" className='p-3 hover:text-gray-500'>About</a> </li>
                <li><a href="#" className='p-3 hover:text-gray-500'>News</a> </li>
                <li><a href="#" className='p-3 hover:text-gray-500'>Contact</a> </li>
                <div className=' text-center  bg-teal-500 rounded-full p-2 cursor-pointer hover:bg-blue-500'>
               <button className='text-center font-bold'>Shop Now</button>
               </div>
            </ul>
           </div>
        </div>
    </section>
  )
}
