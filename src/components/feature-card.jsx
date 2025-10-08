import React from 'react'

export default function FeatureCard() {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-50 gap-4'>
      <img className='w-22' src="/public/themewagon/4.features/icon1.png" alt="icon" />
      <h2 className='text-lg font-medium'>Encrypted Mail</h2>
      <p className='text-center text-gray-500 text-sm pb-2'>A process of encrypting email communications</p>
    </div>
    <div className='flex flex-col justify-center items-center w-50 gap-4'>
      <img className='w-22' src="/public/themewagon/4.features/icon2.png" alt="icon" />
      <h2 className='text-lg font-medium'>Display Sharing</h2>
      <p className='text-center text-gray-500 text-sm pb-2'>With other participants, you may share your scren</p>
    </div>
    <div className='flex flex-col justify-center items-center w-50 gap-4'>
      <img className='w-22' src="/public/themewagon/4.features/icon3.png" alt="icon" />
      <h2 className='text-lg font-medium'>Private Notebook</h2>
      <p className='text-center text-gray-500 text-sm pb-2'>Private Notebook is an application that is protected</p>
    </div>
    <div className='flex flex-col justify-center items-center w-50 gap-4'>
      <img className='w-22' src="/public/themewagon/4.features/icon4.png" alt="icon" />
      <h2 className='text-lg font-medium'>App App Assistance</h2>
      <p className='text-center text-gray-500 text-sm pb-2'>App Assistant is quickly and effectively ran the system</p>
    </div>
    <div className='flex flex-col justify-center items-center w-50 gap-4'>
      <img className='w-22' src="/public/themewagon/4.features/icon5.png" alt="icon" />
      <h2 className='text-lg font-medium'>Multiple Printing</h2>
      <p className='text-center text-gray-500 text-sm pb-2'>Our canvas prints are crafted on top-notch canvas.</p>
    </div>
    <div className='flex flex-col justify-center items-center w-50 gap-4'>
      <img className='w-22' src="/public/themewagon/4.features/icon6.png" alt="icon" />
      <h2 className='text-lg font-medium'>Free Sketch</h2>
      <p className='text-center text-gray-500 text-sm pb-2'>Our canvas prints are crafted on top-notch canvas</p>
    </div>
    
    </>
  )
}
