import React from 'react'
import ServiceCard from '../components/service-card'

export default function Services() {
  return (
    <div className='relative flex flex-col items-center gap-4 justify-center pb-10' >
      <h1 className='pt-10 text-2xl font-medium'>Service</h1>
      <p className='lg:max-w-150 w-[70%] text-center'>We offer youth with chances for career development in their practice. We also support a wide range of services to ensure client satisfaction.</p>
      <img className='absolute left-25 top-25 w-45' src="/themewagon/2.services/illustration1.png" alt="illustration" />
      <div>
        <ServiceCard />
      </div>
    </div>
  )
}
