import React from 'react'

const FAQ = ({data}: {data: {question: string; answer: string}}) => {
  return (
    <div className='bg-linear-to-br from-[#CBF90C]/20 to-[#B3BBFC]/20 w-fit  border border-[#B3BBFC] p-10 rounded-3xl flex flex-col gap- mb-8 max-w-6xl'>
        <h1 className="text-white font-bold text-2xl mb-4">{data.question}</h1>
        <p className='text-white/50 text-lg'>{data.answer}</p>
    </div>
  )
}

export default FAQ