import React from 'react'

export default function TeamCard() {
    return (
        <div className='flex gap-8 pt-16'>
            <div className='flex flex-col gap-2 items-center'>
                <img className='w-60 cover' src="/themewagon/6.team/image1.png" alt="image1" />
                <h2 className='text-2xl font-medium'>John Adams</h2>
                <p className='text-gray-400'>CEO</p>
            </div>
            <div className='flex flex-col gap-2 items-center'>
            <img className='w-60 cover' src="/themewagon/6.team/image2.png" alt="image2" />
                <h2 className='text-2xl font-medium'>Carrey Johnson</h2>
                <p className='text-gray-400'>Senior Developer</p>
            </div>
            <div className='flex flex-col gap-2 items-center'>
            <img className='w-60 cover' src="/themewagon/6.team/image3.png" alt="image3" />
                <h2 className='text-2xl font-medium'>Ray Marie</h2>
                <p className='text-gray-400'>Developer</p>
            </div>
            <div className='flex flex-col gap-2 items-center'>
            <img className='w-60 cover' src="/themewagon/6.team/image4.png" alt="image4" />
                <h2 className='text-2xl font-medium'>Austin Min</h2>
                <p className='text-gray-400'>Designer</p>
            </div>
        </div>
    )
}
