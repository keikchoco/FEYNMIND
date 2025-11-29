import { BookDashed } from 'lucide-react'
import React from 'react'

const FeaturesCard = ({ data }: { data: { title: string; description: string; icon: React.ReactElement } }) => {
    return (
        <div className='bg-linear-to-br from-[#CBF90C]/20 to-[#B3BBFC]/20 w-fit rounded-2xl border border-[#B3BBFC] px-8  py-12 flex flex-col gap-3 '>
            <div className='bg-[#CBF90C] w-fit rounded-lg p-2 mb-4'>{data.icon}</div>
            <h1 className=' font-bold text-2xl'>{data.title}</h1>
            <p className='text-white/50 text-lg '>{data.description}</p>
        </div>
    )
}

export default FeaturesCard