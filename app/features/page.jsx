import React from 'react'
import hero from '@/starter-code/assets/features/desktop/hero.jpg'
import heroMobile from '@/starter-code/assets/features/mobile/hero.jpg'
import heroTablet from '@/starter-code/assets/features/tablet/hero.jpg'
import boost from '@/starter-code/assets/features/desktop/boost-exposure.svg'
import domain from '@/starter-code/assets/features/desktop/custom-domain.svg'
import drag from '@/starter-code/assets/features/desktop/drag-drop.svg'
import embed from '@/starter-code/assets/features/desktop/embed.svg'
import nolimit from '@/starter-code/assets/features/desktop/no-limit.svg'
import responsive from '@/starter-code/assets/features/desktop/responsive.svg'
import Image from 'next/image'
import Beta from '@/components/Beta'

export default function Features() {

  return (
    <div className='min-h-screen grid pt-[64px] lg:pt-[92px] w-full h-full'>
      <div className='sm:col-span-3 grid sm:grid-cols-3 row-span-2 w-full h-fit'>
        <Image
          className='hidden lg:block col-start-2 col-span-3 w-full'
          src={hero}
          alt='hero'
        />
        <Image
          className='hidden sm:block col-start-3 w-full col-span-1 lg:hidden'
          src={heroTablet}
          alt='hero'
        />
        <Image
          className='w-full sm:hidden'
          src={heroMobile}
          alt='hero'
        />
        <div className='sm:row-start-1 col-start-1 flex bg-black justify-center items-center sm:col-span-2 lg:col-span-1 py-20 lg:p-8 xl:p-0'>
          <div className='flex flex-col items-left gap-3'>
            <h1 className='text-4xl text-white font-bold tracking-widest uppercase xl:text-5xl'>features</h1>
            <p className='text-gray-400 leading-7 max-w-sm xl:text-lg'>We make sure all of our features are designed to be loved by every aspiring and even
              professional photograpers who wanted to share their stories.</p>
          </div>
        </div>
      </div>
      {/* 
        second section
       */}
       <section className='container sm:col-span-3 h-fit'>
       <div className='grid mt-14 sm:grid-cols-6  space-y-12  '>
        <div className='flex flex-col justify-center items-center text-center gap-3 sm:col-span-3 lg:col-span-2 w-full '>
          <Image
          className='lg:py-6'
            src={responsive}
            alt='resp'
          />
          <h1 className='font-bold text-black'>100% Responsive</h1>
          <p className='text-gray-500 max-w-[17rem] xl:max-w-xs'> No matter which the device you’re on, our site is fully responsive and stories
            look beautiful on any screen.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-3 sm:col-span-3 lg:col-span-2 w-full '>
          <Image
          className='sm:mb-7'
            src={nolimit}
            alt='resp'
          />
          <h1 className='font-bold text-black'>No Photo Upload Limit</h1>
          <p className='text-gray-500 max-w-[17rem] xl:max-w-xs'>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and
            share all of your stories in one go.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-3 sm:col-span-3 lg:col-span-2 w-full'>
          <Image
          className='lg:py-6'
            src={drag}
            alt='resp'
          />
          <h1 className='font-bold text-black'>Available to Embed</h1>
          <p className='text-gray-500 max-w-[17rem] xl:max-w-xs'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
            Google Maps, and more. </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-3 sm:col-span-3 lg:col-span-2 w-full'>
          <Image
          className='lg:py-6'
            src={domain}
            alt='resp'
          />
          <h1 className='font-bold text-black'>Available to Embed</h1>
          <p className='text-gray-500 max-w-[17rem] xl:max-w-xs'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
            Google Maps, and more. </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-3 sm:col-span-3 lg:col-span-2 w-full'>
          <Image
          className='lg:py-6'
            src={boost}
            alt='resp'
          />
          <h1 className='font-bold text-black'>Available to Embed</h1>
          <p className='text-gray-500 max-w-[17rem] xl:max-w-xs'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
            Google Maps, and more. </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-3 sm:col-span-3 lg:col-span-2 w-full'>
          <Image
          className='lg:py-6'
            src={embed}
            alt='resp'
          />
          <h1 className='font-bold text-black'>Available to Embed</h1>
          <p className='text-gray-500 max-w-[17rem] xl:max-w-xs'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
            Google Maps, and more. </p>
        </div>

      </div>
       </section>
       <div className='sm:col-span-3 w-full'>
       <Beta />
       </div> 
    </div>
  )
}
