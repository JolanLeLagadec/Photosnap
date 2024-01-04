import React from 'react'
import beta from '@/starter-code/assets/shared/desktop/bg-beta.jpg'
import betaMobile from '@/starter-code/assets/shared/mobile/bg-beta.jpg'
import betaTablet from '@/starter-code/assets/shared/tablet/bg-beta.jpg'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'

export default function Beta() {
  return (
    <div className='relative w-full mt-12 col-span-3'>
        <Image
        className='hidden lg:block w-full'
        src={beta}
        alt=''
         />
        <Image
        className='sm:hidden w-full'
        src={betaMobile}
        alt=''
         />
        <Image
        className='hidden sm:block lg:hidden w-full'
        src={betaTablet}
        alt=''
         />
         <div className='container absolute gap-4 flex flex-col items-left sm:flex-row sm:items-center sm:justify-between  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full  '>
            <h1 className='text-5xl  tracking-widest font-bold text-white uppercase max-w-lg sm:max-w-sm lg:max-w-lg lg:text-4xl xl:text-5xl leading-[3.5rem]'>we&apos;re in beta get your invite today!</h1>
            <div className='flex gap-1 items-center sm:justify-end w-full xl:w-auto mt-5'>
              <button className=' uppercase text-sm  text-white hover:underline tracking-[0.3rem] '>get an invite</button>
              <MoveRight color='white' width={32} strokeWidth={0.7} />
            </div>

         </div>
      
    </div>
  )
}
