'use client'
import { MoveRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Picture({ title, date, author, src }) {
    
    const desktopImage = require(`@/starter-code/assets/stories/desktop/${src}.jpg`);
    const mobileImage = require(`@/starter-code/assets/stories/mobile/${src}.jpg`);
    
    return (
        <Link className='relative sm:col-span-2 lg:col-span-1 sm:hover:-translate-y-10 transition-all h-full group' href=''>
            <div className='brightness-75 group-hover:brightness-100 transition-all'>
                <Image className='hidden sm:block w-full' src={desktopImage} alt={title} />
                <Image className='sm:hidden w-full' src={mobileImage} alt={title} />
            </div>
            <div className='absolute bottom-0 flex flex-col justify-center items-start gap-4 p-6 w-full'>
                <div className='flex flex-col justify-center items-start border-b border-gray-400 w-full py-3 gap-1'>
                    <span className='text-gray-300'>{date}</span>
                    <h1 className='text-white font-semibold'>{title}</h1>
                    <span className='text-gray-200'>by {author}</span>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <button className='uppercase tracking-widest text-sm flex items-center gap-3 text-white '>Read story</button>  
                     <MoveRight color='white' width={32} strokeWidth={0.7} /> 
                </div>
            </div>
        </Link>
    )
}
