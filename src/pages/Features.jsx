import React from 'react'
import FeatureCard from '../components/feature-card'

export default function Features() {
  return (
          <div className='flex flex-col items-center gap-4 justify-center pb-10' >
            <h1 className='pt-10 text-2xl font-medium'>Features</h1>
            <p className='lg:max-w-150 w-[70%] text-center'>We provide a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system</p>
            <div className='grid grid-cols-3 gap-30 pt-10'>
              <FeatureCard/>
            </div>
          </div>
  )
}
