import React from 'react'
import Video from "../../Assets/vide.mp4"
import {ImLocation} from "react-icons/im"
import {AiOutlineFilter,AiFillFacebook,AiOutlineYoutube,AiOutlineInstagram} from "react-icons/ai"

export const Home = () => {
  return (
    <section className='relative flex items-center w-full h-[100vh] justify-center'>
              <div className='custome'></div>
                <video src={Video} autoPlay loop muted  className='h-full object-cover w-full'></video>

            <div className='absolute z-30 text-white w-full h-full flex flex-col container mx-auto  justify-center px-5 lg:px-0'>
                <span className='text-xs font-bold text-gray-300 from-black uppercase'>Our packages</span>
                <h2 className='text-3xl font-bold'>Search Your <span className='border-b-2 border-green-500'>Holiday</span></h2>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-1 bg-white shadow-lg rounded-md w-full  h-auto lg:h-32 mt-5 p-5'>
                    <div className='block text-gray-400 w-[90%] lg:w-[30%] items-center justify-center'>
                      <label htmlFor="nom">Search Your destination</label>
                      <div className='flex items-center justify-center h-[39px] mt-1 p-1 rounded-lg text-black bg-slate-300 '>
                      <input type="text" placeholder='Entrez Votre Nom' className='w-full'/>
                      <ImLocation className='text-2xl'/>
                      </div>
                    </div>
                    <div className='block text-gray-400 w-[90%] lg:w-[30%] items-center justify-center'>
                      <label htmlFor="nom">Select Your Date</label>
                      <div className='flex items-center justify-center h-[39px] mt-1 p-1 rounded-lg text-black bg-slate-300 '>
                      <input type="date" className='w-full'/>
                      </div>
                    </div>
                    <div className='block text-gray-400 w-[90%] lg:w-[35%] items-center justify-center'>
                      <div className='flex  items-center justify-between'>
                      <label htmlFor="nom">Max Price</label>
                      <h3 className='text-black font-bold'>$3000</h3>
                      </div>
                      <div className='mt-2'>
                      <input type="range"  />
                      </div>
                    </div>
                    <div className='bg-teal-600 absolute bottom-52 hidden lg:flex w-36 rounded-full'>
                      <button className='flex items-center justify-center gap-2 p-1 '>
                        <AiOutlineFilter/>
                        More filter
                      </button>
                    </div>
                </div>
                <div className='text-white mt-5 flex items-center text-2xl gap-2 cursor-pointer font-bold'>
                      <AiFillFacebook/>
                      <AiOutlineYoutube/>
                      <AiOutlineInstagram/>
                    </div>
            </div>
    </section>
  )
}
