import React from 'react'

export default function Heading() {
  return (
    <div className='wraper'>
    <div className='w-full bg-[#202124] h-32 flex justify-center items-center gap-1 flex-col'>
    <div className='flex flex-row justify-center items-center gap-4'>
        <i className=" pl-2 fa-solid fa-rss text-[#d70000] fa-2xl"></i>
        <h1 className='text-white font-[Noto-Serif] font-bold text-4xl'>The India Times</h1>
    </div>
        <p className='text-white font-[Noto-Serif] text-sm '>JOURNALISM OF COURAGE</p>
        
    </div>
    
    </div>
  )
}
