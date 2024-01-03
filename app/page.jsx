import Image from 'next/image'

import responsive from '@/starter-code/assets/features/desktop/responsive.svg'
import nolimit from '@/starter-code/assets/features/desktop/no-limit.svg'
import embed from '@/starter-code/assets/features/desktop/embed.svg'

import create from '@/starter-code/assets/home/desktop/create-and-share.jpg'
import createMobile from '@/starter-code/assets/home/mobile/create-and-share.jpg'
import createTablet from '@/starter-code/assets/home/tablet/create-and-share.jpg'

import stories from '@/starter-code/assets/home/desktop/beautiful-stories.jpg'
import storiesMobile from '@/starter-code/assets/home/mobile/beautiful-stories.jpg'
import storiesTablet from '@/starter-code/assets/home/tablet/beautiful-stories.jpg'

import design from '@/starter-code/assets/home/desktop/designed-for-everyone.jpg'
import designMobile from '@/starter-code/assets/home/mobile/designed-for-everyone.jpg'
import designTablet from '@/starter-code/assets/home/tablet/designed-for-everyone.jpg'

import mountains from '@/starter-code/assets/stories/desktop/mountains.jpg'
import mountainsMobile from '@/starter-code/assets/stories/mobile/mountains.jpg'

import sunset from '@/starter-code/assets/stories/desktop/cityscapes.jpg'
import sunsetMobile from '@/starter-code/assets/stories/mobile/cityscapes.jpg'

import voyage from '@/starter-code/assets/stories/desktop/18-days-voyage.jpg'
import voyageMobile from '@/starter-code/assets/stories/mobile/18-days-voyage.jpg'

import architecturals from '@/starter-code/assets/stories/desktop/architecturals.jpg'
import architecturalsMobile from '@/starter-code/assets/stories/mobile/architecturals.jpg'

import { MoveRight } from 'lucide-react'
import Link from 'next/link'


export default function Home() {


  return (
    <main className="grid lg:grid-cols-8 pt-[64px] lg:pt-[92px] w-full">
      {/* 
        first section
       */}
      <Image
        className='hidden lg:block w-full col-span-4 xl:col-span-5 lg:col-start-5 h-full'
        src={create}
        alt='create'
      />
      <Image
        className='hidden sm:block lg:hidden  sm:col-span-1 sm:col-start-3 h-full w-full'
        src={createTablet}
        alt='create'
      />
      <Image
        className='sm:hidden w-full'
        src={createMobile}
        alt='create'
      />
      <div className=' px-5 py-12 flex  items-start justify-center lg:items-center  gap-5 bg-black w-full sm:row-start-1 sm:col-span-2 lg:col-span-4 xl:col-span-3'>
        <div className='flex flex-col gap-4 sm:h-full justify-center '>
          <h1 className='text-3xl xl:text-5xl font-bold  text-white tracking-widest xl:leading-[4rem] lg:leading-[2rem] uppercase max-w-[303px] lg:max-w-md'>Create and share your photo Stories.</h1>
          <p className='text-gray-300 max-w-[413px] lg:leading-7 xl:text-lg'>Photosnap is a platform for photographers and visual storytellers. We make it
            easy to share photos, tell stories and connect with others.</p>
          <button className='text-white uppercase tracking-widest text-sm flex items-center gap-3 '>get an invite<MoveRight strokeWidth={0.7} /></button>
        </div>
      </div>
      {/* 
        second section
       */}
      <Image
        className='hidden lg:block w-full col-span-4 xl:col-span-5 lg:col-start-1 h-full'
        src={stories}
        alt='create'
      />
      <Image
        className='hidden sm:block lg:hidden col-span-1 col-start-1 h-full row-start-2 w-full'
        src={storiesTablet}
        alt='create'
      />
      <Image
        className='sm:hidden w-full'
        src={storiesMobile}
        alt='create'


      />
      <div className='px-5 py-12 flex  items-start justify-center lg:items-center gap-5 bg-white text-black w-full sm:col-span-2 lg:col-span-4 xl:col-span-3'>
        <div className='flex flex-col gap-4 sm:h-full justify-center '>
          <h1 className='text-3xl xl:text-5xl font-bold  tracking-widest xl:leading-[4rem] lg:leading-[2rem] uppercase max-w-[303px] lg:max-w-md'>Beautiful stories every time.</h1>
          <p className='text-gray-500 max-w-[413px] lg:leading-7 xl:text-lg'>We provide design templates to ensure your stories look terrific. Easily add
            photos, text, embed maps and media from other networks. Then share your story
            with everyone.</p>
          <button className=' uppercase tracking-widest text-sm flex items-center gap-3 '>view the stories<MoveRight strokeWidth={0.7} /></button>
        </div>
      </div>
      {/* 
        third section
       */}
      <Image
        className='hidden lg:block w-full col-span-4 xl:col-span-5 lg:col-start-5 h-full'
        src={design}
        alt='create'
      />
      <Image
        className='hidden sm:block lg:hidden col-span-1 col-start-3 h-full row-start-3 w-full'
        src={designTablet}
        alt='create'
      />
      <Image
        className='sm:hidden w-full'
        src={designMobile}
        alt='create'
      />
      <div className=' px-5 py-12 flex  items-start justify-center lg:items-center lg:row-start-3  gap-5 bg-black w-full sm:col-span-2 lg:col-span-4 xl:col-span-3'>
        <div className='flex flex-col gap-4 sm:h-full justify-center '>
          <h1 className='text-3xl xl:text-5xl font-bold  text-white tracking-widest xl:leading-[4rem] lg:leading-[2rem] uppercase max-w-[303px] lg:max-w-md'>Designed for everyone.</h1>
          <p className='text-gray-300 max-w-[413px] lg:leading-7 xl:text-lg'>Photosnap can help you create stories that resonate with your audience.  Our
            tool is designed for photographers of all levels, brands, businesses you name it.</p>
          <button className='text-white uppercase tracking-widest text-sm flex items-center gap-3 '>view the stories<MoveRight strokeWidth={0.7} /></button>
        </div>
      </div>
      {/* 
        fourth section
       */}
      <div className='grid sm:grid-cols-4 w-full sm:col-span-3 lg:col-span-8 h-fit '>
        {/* 
         mountains
        */}
        <Link className='relative sm:col-span-2 lg:col-span-1 sm:hover:-translate-y-10 transition-all h-full group' href=''><div className='brightness-50 group-hover:brightness-100 transition-all'>
          <Image
            className='hidden sm:block w-full'
            src={mountains}
            alt='create'
          />
          <Image
            className='sm:hidden w-full '
            src={mountainsMobile}
            alt='create'
          />
        </div>
          <div className='absolute bottom-0 flex flex-col justify-center items-start gap-4 p-6 w-full '>
            <div className='flex flex-col justify-center items-start border-b border-gray-400 w-full py-3'>
              <h1 className='text-white font-semibold'>The mountains</h1>
              <span className='text-gray-200'>by John Appleseed</span>
            </div>
            <div className='flex justify-between items-center w-full'>
              <button className=' uppercase tracking-widest text-sm flex items-center gap-3 text-white '>read story</button>
              <MoveRight color='white' width={32} strokeWidth={0.7} />
            </div>
          </div>
        </Link>
        {/* 
        cityscapes
       */}

        <Link className='relative sm:col-span-2 lg:col-span-1 sm:hover:-translate-y-10 transition-all h-full group' href=''>
          <div className='brightness-75 group-hover:brightness-100 transition-all'>
            <Image
              className='hidden sm:block w-full '
              src={sunset}
              alt='create'
            />
            <Image
              className='sm:hidden w-full'
              src={sunsetMobile}
              alt='create'
            />
          </div>
          <div className='absolute bottom-0 flex flex-col justify-center items-start gap-4 p-6 w-full'>
            <div className='flex flex-col justify-center items-start border-b border-gray-400 w-full py-3'>
              <h1 className='text-white font-semibold'>Sunset Cityscapes</h1>
              <span className='text-gray-200'>by Benjamin Cruz</span>
            </div>
            <div className='flex justify-between items-center w-full'>
              <button className=' uppercase tracking-widest text-sm flex items-center gap-3 text-white '>Read story</button>
              <MoveRight color='white' width={32} strokeWidth={0.7} />
            </div>
          </div>
        </Link>
        {/* 
        voyage
       */}
        <Link className='relative sm:row-span-1 sm:col-span-2 lg:col-span-1 sm:hover:-translate-y-10 transition-all group' href=''>
          <div className='brightness-75 group-hover:brightness-100 transition-all'>
            <Image
              className='hidden sm:block w-full'
              src={voyage}
              alt='create'
            />
            <Image
              className='sm:hidden w-full h-full'
              src={voyageMobile}
              alt='create'
            />
          </div>
          <div className='absolute bottom-0 flex flex-col justify-center items-start gap-4 p-6 w-full  '>
            <div className='flex flex-col justify-center items-start border-b border-gray-400 w-full py-3'>
              <h1 className='text-white font-semibold'>18 Days Voyage</h1>
              <span className='text-gray-200'>by Alexei Borodin</span>
            </div>
            <div className='flex justify-between items-center w-full'>
              <button className=' uppercase tracking-widest text-sm flex items-center gap-3 text-white '>read story</button>
              <MoveRight color='white' width={32} strokeWidth={0.7} />
            </div>
          </div>
        </Link>
        {/* 
        architecturals
       */}
        <Link className='relative sm:col-span-2 lg:col-span-1 sm:hover:-translate-y-10 transition-all h-full group' href=''>
          <div className='group-hover:brightness-95 brightness-50 transition-all'>
            <Image
              className='hidden sm:block w-full '
              src={architecturals}
              alt='create'
            />
            <Image
              className='sm:hidden w-full'
              src={architecturalsMobile}
              alt='create'
            />
          </div>
          <div className='absolute bottom-0 flex flex-col justify-center items-start gap-4 p-6 w-full'>
            <div className='flex flex-col justify-center items-start border-b border-gray-400 w-full py-3'>
              <h1 className='text-white font-semibold'>Architecturals</h1>
              <span className='text-gray-200'>by Samantha Brooke</span>
            </div>
            <div className='flex justify-between items-center w-full'>
              <button className=' uppercase tracking-widest text-sm flex items-center gap-3 text-white '>read story</button>
              <MoveRight color='white' width={32} strokeWidth={0.7} />
            </div>
          </div>
        </Link>
      </div>
      <div className='grid row-start-10 sm:col-start-2 mt-14 lg:grid-cols-3  lg:col-span-8 space-y-12 lg:space-y-0'>
        <div className='flex flex-col justify-center items-center text-center gap-3 col-span-1 w-full '>
          <Image
          className='lg:py-6'
            src={responsive}
            alt='resp'
          />
          <h1 className='font-bold text-black'>100% Responsive</h1>
          <p className='text-gray-500 max-w-xs'> No matter which the device you’re on, our site is fully responsive and stories
            look beautiful on any screen.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-3 col-span-1 w-full'>
          <Image
          className='lg:py-10'
            src={nolimit}
            alt='resp'
          />
          <h1 className='font-bold text-black'>No Photo Upload Limit</h1>
          <p className='text-gray-500 max-w-xs'>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and
            share all of your stories in one go.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-3 col-span-1 w-full'>
          <Image
          className='lg:py-6'
            src={embed}
            alt='resp'
          />
          <h1 className='font-bold text-black'>Available to Embed</h1>
          <p className='text-gray-500 max-w-xs'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
            Google Maps, and more. </p>
        </div>

      </div>
    </main>
  )
}
