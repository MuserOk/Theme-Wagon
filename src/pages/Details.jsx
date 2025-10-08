import React from 'react'

export default function Details() {
  return (
    <div className='flex flex-col'>
      <div className='relative flex'>
        <img className='w-[50%] h-120' src="/themewagon/3.details/illustration1.png" alt="illustration" />
        <img className='absolute w-100 left-56 top-10' src="/themewagon/3.details/illustration3.png" alt="" />
        <div className=' p-24 w-[50%]  h-120'>
          <h1 className='p-4 font-medium text-2xl'>A creative team which buids stunning UI/UX</h1>
          <p className='py-2 px-4 text-sm text-gray-400'>Today, I'd like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modem user experience. <br />
            The most stinning, cutting, cutting-edge UI/UX.</p>
          <p className='py-2 px-4 text-sm text-gray-400'>Klean is a free Boostrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <strong>Theme Wagon</strong></p>
          <button className="relative inline-flex items-center justify-center mt-10 ml-4 p-[2px] rounded-md bg-gradient-to-br from-violet-400 to-indigo-500">
            <div className="flex items-center justify-center w-full h-full rounded-md bg-white px-3 py-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500 font-medium">
                Read More
              </span>
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className='relative flex h-150'>
          <div className='w-[50%] p-24'>
            <h1 className='p-4 font-medium text-2xl'>A creative team which buids stunning UI/UX</h1>
            <p className='py-2 px-4 text-sm text-gray-400'>Today, I'd like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modem user experience. <br />
              The most stinning, cutting, cutting-edge UI/UX.</p>
            <p className='py-2 px-4 text-sm text-gray-400'>Klean is a free Boostrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <strong>Theme Wagon</strong></p>
            <button className="relative inline-flex items-center justify-center mt-10 ml-4 p-[2px] rounded-md bg-gradient-to-br from-violet-400 to-indigo-500">
              <div className="flex items-center justify-center w-full h-full rounded-md bg-white px-3 py-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500 font-medium">
                  Read More
                </span>
              </div>
            </button>
          </div>
          <img className='w-[50%]' src="/themewagon/3.details/illustration2.png" alt="illustration" />
          <img className='absolute w-100 right-56 bottom-10' src="/themewagon/3.details/illustration6.png" alt="" />
          
        </div>
      </div>
    </div>
  )
}
