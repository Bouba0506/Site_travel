import React from 'react'
import { data } from '../../Data'
import {ImLocation} from "react-icons/im"
import {TfiAgenda} from "react-icons/tfi"

export const Main = () => {
    console.log(data);
  return (
    <section className='mt-12 w-full h-full container mx-auto px-5 lg:px-0'>
        <h2 className='text-2xl font-bold'>Most visited <span className='border-b-[2px] border-green-700'>Destination</span></h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-0 mt-2 gap-5 pb-5 '>
            {data.map((list,index)=>(
                <div key={index} className='bg-white shadow-lg rounded-md w-72 pb-5 hover:translate-x-8 duration-500'>
                    <div className='w-full  rounded-md'>
                        <img src={list.imgsrc} alt="img1" className='rounded-t-lg' />
                    </div>
                    <div className='px-3 mt-2'>
                    <h1 className='font-bold'>{list.title}</h1>
                    <div className='flex items-center gap-1 text-gray-400 border-b-[2px] border-gray-200'>
                        <ImLocation/>
                        <p>{list.location}</p>
                    </div>
                    <div className='flex items-center justify-between mt-1 border-b-[2px] border-gray-200'>
                    <p>{list.langue}</p>
                    <p className='font-bold'>{list.price}</p>
                    </div>
                    <p className='my-2'>{list.description}</p>
                    <button className='bg-teal-600 rounded-full p-1 w-28 flex items-center gap-2 text-white'>Explorer<TfiAgenda/></button>
                    </div>
                </div>
                
            ))}
            
        </div>
    </section>
  )
}
