// src/components/Projects/ProjectCard.jsx
import React from 'react'

function ProjectCard({ title, main, img }) {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
      <img className='p-4 rounded-xl' src={img} alt={title} />
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
        {title}
      </h3>
      <p className='px-4 text-sm md:text-md leading-tight py-2'>
        {main}
      </p>

      {/* Optional action buttons */}
      {/* 
      <div className='mt-2 p-2 flex gap-2'>
        <button className='text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          Demo
        </button>
        <button className='text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          Source Code
        </button>
      </div>
      */}
    </div>
  )
}

export default ProjectCard
