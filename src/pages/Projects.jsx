import React from 'react'
import ProyectGalery from '../components/proyect-galery'

export default function Projects() {
  return (

    <div className='flex flex-col items-center gap-4 justify-center' >
      <h1 className='pt-10 text-2xl font-medium'>Our Projects</h1>
      <p className=' text-gray-400 lg:max-w-150 text-center'>A project is a single or team activity, combining research and design with best effort. Here are some of our team's projects</p>
      <ProyectGalery />
      <button className="relative cursor-pointer inline-flex items-center justify-center mt-30  p-[2px] rounded-md bg-gradient-to-br from-violet-300 to-indigo-400">
        <div className="flex items-center justify-center w-full h-full rounded-md bg-white px-3 py-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-400 font-medium">
            view More
          </span>
        </div>
      </button>
    </div>

  )
}
