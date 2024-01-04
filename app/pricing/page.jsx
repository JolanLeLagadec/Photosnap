
import hero from '@/starter-code/assets/pricing/desktop/hero.jpg'
import heroMobile from '@/starter-code/assets/pricing/mobile/hero.jpg'
import heroTab from '@/starter-code/assets/pricing/tablet/hero.jpg'
import Image from 'next/image'


import Cards from './Cards'
import Board from './Board'
import Beta from '@/components/Beta'

export default function Pricing() {


  return (
    <div className='grid pt-[64px] lg:pt-[92px] w-full h-fit'>
      <div className='grid sm:col-span-3 w-full h-fit '>
        <Image
          className='hidden lg:block col-start-2 col-span-2 w-full row-span-1'
          src={hero}
          alt='hero'
        />
        <Image
          className='hidden sm:block col-start-3 w-full col-span-1 lg:hidden'
          src={heroTab}
          alt='hero'
        />
        <Image
          className='w-full sm:hidden'
          src={heroMobile}
          alt='hero'
        />
        <div className='sm:row-start-1 col-start-1 flex bg-black justify-center items-center sm:col-span-2 lg:col-span-1 py-20 lg:p-8 xl:p-0'>
          <div className='flex flex-col items-left gap-3'>
            <h1 className='text-4xl text-white font-bold tracking-widest uppercase xl:text-5xl'>pricing</h1>
            <p className='text-gray-400 leading-7 max-w-sm xl:text-lg'>Create a your stories, Photosnap is a platform for photographers and visual storytellers.
              It’s the simple way to create and share your photos.</p>
          </div>
        </div>
      </div>
      {/* 
          pricing section
         */}
      <Cards />
      <Board />
      <Beta />
    </div>
  )
}
