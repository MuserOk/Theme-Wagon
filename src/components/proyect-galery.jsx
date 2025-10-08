import React from 'react'

export default function ProyectGalery() {
  return (
    <div className='grid grid-cols-3 gap-4 w-180 m-auto p-4 rounded-2xl border-2 border-white shadow-md'>
      <div className='flex flex-col gap-4'>
        <img src="/themewagon/5.projects/image1.png" alt="image1" />
        <img src="/themewagon/5.projects/image2.png" alt="image2" />
      </div>
      <div className='flex flex-col gap-4'>
        <img src="/themewagon/5.projects/image3.png" alt="image3" />
        <img src="/themewagon/5.projects/image4.png" alt="image4" />
      </div>
      <div className='flex flex-col gap-4'>
        <img src="/themewagon/5.projects/image5.png" alt="image5" />
        <img src="/themewagon/5.projects/image6.png" alt="image6" />
      </div>
    </div>
  )
}
