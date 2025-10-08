import React from 'react'
import TeamCard from '../components/team-card'

export default function Team() {
  return (
    <div>
         <div className='flex flex-col items-center justify-center' >
      <h1 className='py-6 text-2xl font-medium'>Our Team</h1>
      <p className=' text-gray-400 lg:max-w-150 text-center'>People from various origins, cultures, and personalities make up our teams.</p>
      <p className=' text-gray-400 lg:max-w-150 text-center'>This blend makes it a powerful team</p>
      <TeamCard/>
      <button className="relative cursor-pointer inline-flex items-center justify-center mt-30  p-[2px] rounded-md bg-gradient-to-br from-violet-300 to-indigo-400">
        <div className="flex items-center justify-center w-full h-full rounded-md bg-white px-3 py-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-400 font-medium">
            View Full Team
          </span>
        </div>
      </button>
    </div>
    </div>
  )
}
