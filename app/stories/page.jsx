import React from 'react'

import moon from '@/starter-code/assets/stories/desktop/moon-of-appalacia.jpg'
import moonMobile from '@/starter-code/assets/stories/mobile/moon-of-appalacia.jpg'
import moonTablet from '@/starter-code/assets/stories/tablet/moon-of-appalacia.jpg'

import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import Picture from './Picture'



export default function Stories() {

  const pictures = [
    {
      title: 'The Mountains',
      date: 'April 16th 2020',
      author: 'John Appleseed',
      src: 'mountains'
    },
    {
      title: 'Sunset Cityscapes',
      date: 'April 14th 2020',
      author: 'Benjamin Cruz',
      src: 'cityscapes'
    },
    {
      title: '18 Days Voyage',
      date: 'April 11th 2020',
      author: 'Alexei Borodin',
      src: '18-days-voyage'
    },
    {
      title: 'Architecturals',
      date: 'April 9th 2020',
      author: 'Samantha Brooke',
      src: 'architecturals'
    },
    {
      title: 'World Tour 2019',
      date: 'April 7th 2020',
      author: 'Timothy Wagner',
      src: 'world-tour'
    },
    {
      title: 'Unforeseen Corners',
      date: 'April 3rd 2020',
      author: 'William Malcolm',
      src: 'unforeseen-corners'
    },
    {
      title: 'King on Africa: Part ll',
      date: 'March 29th 2020',
      author: 'Tim Hilenburg',
      src: 'king-on-africa'
    },
    {
      title: 'The Trip to Nowhere',
      date: 'March 21st 2020',
      author: 'Felicia Rourke',
      src: 'trip-to-nowhere'
    },
    {
      title: 'Rage of The Sea',
      date: 'March 19th 2020',
      author: 'Mohammed Abdul',
      src: 'rage-of-the-sea'
    },
    {
      title: 'Running Free',
      date: 'March 16th 2020',
      author: 'Michelle',
      src: 'running-free'
    },
    {
      title: 'Behind the waves',
      date: 'March 11st 2020',
      author: 'Lamarr Wilson',
      src: 'behind-the-waves'
    },
    {
      title: 'Calm Waters',
      date: 'March 9th 2020',
      author: 'Samantha Brooke',
      src: 'calm-waters'
    },
    {
      title: 'The Milky Way',
      date: 'March 5th 2020',
      author: 'Benjamin Cruz',
      src: 'milky-way'
    },
    {
      title: 'Night at The Dark Forest',
      date: 'March 4th 2020',
      author: 'Mohammed Abdul',
      src: 'dark-forest'
    },
    {
      title: "Somwarpet&apos;s Beauty",
      date: 'March 1st 2020',
      author: 'Michelle',
      src: 'somwarpet'
    },
    {
      title: "February 25th 2020",
      date: 'Land of Dreams',
      author: 'William Malcolm',
      src: 'land-of-dreams'
    },


  ]
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 pt-[64px] lg:pt-[92px] w-full h-full'>
      <div className='relative h-fit sm:col-span-2 lg:col-span-4'>
        <Image
          className='sm:hidden w-full'
          src={moonMobile}
          alt=''
        />
        <Image
          src={moonTablet}
          alt=''
          className='hidden sm:block lg:hidden w-full h-full'
        />
        <Image
          className='hidden lg:block w-full'
          src={moon}
          alt=''
        />
        <div className='hidden sm:block absolute sm:left-[5rem] sm:top-10 lg::top-[3%] xl:top-[15%] '>
          <div className='p-2 flex flex-col items-left '>
            <span className='font-semibold text-white uppercase tracking-wider mb-4'>Last month&apos;s featured story</span>
            <h1 className='sm:text-[2.75rem] xl:text-5xl font-bold  text-white tracking-widest xl:leading-[4rem] uppercase max-w-[303px] lg:max-w-md'>Hazy full moon of Appalachia</h1>
            <h2 className='text-gray-400 font-light'>March 2nd 2020<span className='text-gray-100 ml-3'>by John Appleseed</span></h2>
            <p className='text-gray-300 max-w-[413px] lg:leading-7 xl:text-lg mt-5'>The dissected plateau area, while not actually made up of geological mountains,
              is popularly called &quot;mountains&quot; especially in eastern Kentucky and West Virginia,
              and while the ridges are not high, the terrain is extremely rugged.</p>
            <div className='flex gap-3 items-center w-full mt-5'>
              <button className=' uppercase  text-sm flex items-center gap-3 text-white hover:underline tracking-[0.3rem]'>read the story</button>
              <MoveRight color='white' width={32} strokeWidth={0.7} />
            </div>

          </div>
        </div>
        <div className='sm:hidden'>
          <div className='p-6 flex flex-col items-left bg-black gap-8  '>
            <span className='text-gray-400 font-semibold text-sm -mb-3 uppercase'>Last month&apos;s featured story</span>
            <h1 className='text-4xl font-bold  text-white tracking-widest xl:leading-[4rem] lg:leading-[2rem] uppercase max-w-[303px] '>Hazy full moon of Appalachia</h1>
            <h2 className='text-gray-400'>March 2nd 2020<span className='text-white ml-3'>by John Appleseed</span></h2>
            <p className='text-gray-300'>The dissected plateau area, while not actually made up of geological mountains,
              is popularly called &quot;mountains&quot; especially in eastern Kentucky and West Virginia,
              and while the ridges are not high, the terrain is extremely rugged.</p>
            <div className='flex items-center w-full gap-10'>
              <button className=' uppercase tracking-widest text-sm flex items-center gap-3 text-white '>read story</button>
              <MoveRight color='white' width={32} strokeWidth={0.7} />
            </div>
          </div>
        </div>
      </div>
      {
        pictures.map((pict) => (
          <div key={pict.title} className='h-full'>
            <Picture {...pict} />
          </div>   
        ))

      }


    </div>
  )
}
