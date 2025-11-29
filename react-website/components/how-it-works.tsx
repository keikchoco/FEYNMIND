import React from 'react'

const HowItWorks = ({data}: {data: {step: number; title: string; description: string; color: string; textColor: string}}) => {
  return (
    <div className='flex flex-col items-center gap-6'>
        <div className={`bg-[${data.color}] w-22 aspect-square flex items-center justify-center text-center rounded-full text-[${data.textColor}] text-4xl font-bold`}>{data.step}</div>
        <h1 className='font-bold text-2xl'>{data.title}</h1>
        <p className='text-[#FFFFFF]/50 text-center text-lg'>{data.description}</p>
    </div>
  )
}

export default HowItWorks