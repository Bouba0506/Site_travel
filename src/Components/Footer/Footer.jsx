import React from 'react'
import video2 from "../../Assets/ship.mp4"
import {MdOutlineTravelExplore} from "react-icons/md"
import {FiSend} from "react-icons/fi"
import {IoIosArrowForward} from "react-icons/io"
import { AiFillFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { footer } from '../../Data'
export const Footer = () => {
  return (
    <section className='flex items-center justify-center h-[50vh] w-full relative bg-slate-700 lg:bg-transparent mt-0 lg:mt-36'>
        {/* <div className='custome'></div> */}
        <video src={video2} autoPlay muted loop className='hidden lg:block'></video>
        <div className='absolute top-12 lg:top-0 flex flex-col items-center justify-center '>
            <div className='flex flex-col md:flex-row items-center gap-14 text-white '>
                <div className='flex flex-col items-center justify-center'>
                <span className='text-xs uppercase text-gray-500 font-bold'>Keep in touh</span>
                <h1 className='font-bold'>Travel with us</h1>
                </div>
                <div className='flex  items-center w-80 justify-center gap-3 md:gap-5'>
                <div className='flex items-center justify-center h-[39px] mt-1 p-1 rounded-2xl text-black bg-slate-300 '>
                      <input type="text" placeholder='Entrez Votre Nom' className='w-full'/>
                      </div>
                   <button className='flex items-center bg-teal-600  w-24 text-white rounded-3xl p-2 gap-2'>Send<FiSend/></button>
                </div>
            </div>
            <div className='bg-white flex flex-wrap  text-black container mx-auto mt-5 items-center justify-center rounded-t-lg py-5 px-3'>
                <div className='flex flex-col justify-center'>
                    <div className='flex items-center gap-2 '>
                        <MdOutlineTravelExplore className='text-teal-600'/>
                        <h2 className='font-bold'>Travel.</h2>
                    </div>
                    <div className='w-80 lg:w-96 text-[16px] text-gray-500'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellendus, eveniet aliquam magnam fugiat obcaecati ipsa voluptates in? Deleniti, necessitatibus?</p>
                    </div>
                    <div className='flex items-center text-2xl text-gray-500 gap-3 mt-3'>
                    <AiFillFacebook/>
                    <AiOutlineYoutube/>
                    <AiOutlineInstagram/>
                    </div>
                </div>
                <div className='grid grid-cols-3 md:flex items-center gap-3 mt-2 lg:mt-0 '>
                    {footer.map((foot,index)=>(
                        <div key={index} className='flex flex-col items-center space-y-1 lg:space-y-3 justify-center'>
                            <h1 className='font-bold text-xs lg:text-2xl'>{foot.title}</h1>
                            <div className='flex gap-1 w-28 items-center'>
                                <IoIosArrowForward className='text-green-700'/>
                               <p className='text-xs'>{foot.span[0]}</p>
                            </div>
                            <div className='flex gap-1 w-28 items-center'>
                                <IoIosArrowForward className='text-green-700'/>
                               <p className='text-xs'>{foot.span[1]}</p>
                            </div>
                            <div className='flex gap-1 w-28 items-center'>
                                <IoIosArrowForward className='text-green-700'/>
                               <p className='text-xs'>{foot.span[2]}</p>
                            </div>
                            <div className='flex gap-1 w-28 items-center'>
                                <IoIosArrowForward className='text-green-700'/>
                               <p className='text-xs'>{foot.span[3]}</p>
                            </div>
                            <div className='flex w-28 items-center gap-2'>
                                <IoIosArrowForward className='text-green-700'/> <p className='text-xs'>{foot.span[4]}</p>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden md:flex  w-full justify-between bg-teal-600 text-white px-3  py-2'>
                <h2>Best Travel Website</h2>
                <p>Created By Bouba &copy;2023</p>
            </div>
        </div>
    </section>
  )
}
