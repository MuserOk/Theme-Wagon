import React from 'react'

export default function ServiceCard() {
  return (
    <div className='absolute flex gap-4 top-45 left-1/2 -translate-x-1/2'>
      <div className='rounded-4xl flex flex-col justify-center items-center p-10 w-80 shadow-[0px_0px_4px]'>
        <img className='w-28 py-4' src="/themewagon/2.services/icon1.png" alt="" />
        <div className='px-6'>
          <h2 className='font-medium text-lg py-2'>Send Texts Instantly</h2>
          <p className='text-sm'>Financial planning, forecasting and adjusting rapidly with customer demands and bubgets.</p>
          <a className='flex items-center pt-10' href="#">
            <p>Learn More</p>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#050505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </a>
        </div>
      </div>
      <div className='rounded-4xl flex flex-col justify-center items-center p-10 w-80 shadow-[0px_0px_4px]'>
        <img className='w-28 py-4' src="/themewagon/2.services/icon2.png" alt="" />
        <div className='px-6'>
          <h2 className='font-medium text-lg py-2'>Better Organized</h2>
          <p className='text-sm'>Latest technology and experienced guidnce, trained HR specialists to keep update.</p>
          <a className='flex items-center pt-10' href="#">
            <p>Learn More</p>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#050505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </a>
        </div>
      </div>
      <div className='rounded-4xl flex flex-col justify-center items-center p-10 w-80 shadow-[0px_0px_4px]'>
        <img className='w-28 py-4' src="/themewagon/2.services/icon3.png" alt="icon3" />
        <div className='px-6'>
          <h2 className='font-medium text-lg py-2'>Analytical Statistics</h2>
          <p className='text-sm'>Messages, real-time reminders, memos, and many more will keep your team in sync.</p>
          <a className='flex items-center pt-10' href="#">
            <p>Learn More</p>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#050505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </a>
        </div>
      </div>
    </div>
  )
}
