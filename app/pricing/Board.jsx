import { Check } from 'lucide-react'
import React from 'react'

export default function Board() {
  return (
    <div className='container sm:col-span-3 mt-20'>
        <h1 className='hidden sm:flex text-5xl tracking-widest font-bold text-black uppercase items-center justify-center '>compare</h1>
        <div className='hidden sm:grid grid-rows-9 w-full mt-14 mb-14'>
            <div className='grid row-start-1 grid-cols-5 border-b border-black p-4 py-6'>
                <h1 className='col-span-2 text-black uppercase tracking-wider font-bold'>the features</h1>
                <span className='col-span-1 text-black uppercase tracking-wider font-bold mx-auto'>basic</span>
                <span className='col-span-1 text-black uppercase tracking-wider font-bold mx-auto'>pro</span>
                <span className='col-span-1 text-black uppercase tracking-wider font-bold mx-auto'>business</span>
            </div>
            <div className='grid row-start-2 grid-cols-5 border-b border-gray-300 p-4 py-6 justify-center'>
                <h1 className='col-span-2 text-black uppercase tracking-wider font-bold'>unlimited story posting</h1>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
            </div>
            <div className='grid row-start-3 grid-cols-5 border-b border-gray-300 p-4 py-6 justify-center'>
                <h1 className='col-span-2 text-black uppercase tracking-wider font-bold'>unlimited photo upload</h1>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
            </div>
            <div className='grid row-start-4 grid-cols-5 border-b border-gray-300 p-4 py-6 justify-center'>
                <h1 className='col-span-2 text-black uppercase tracking-wider font-bold'>embedding custom content</h1>
                <span className='col-span-1 text-black mx-auto'></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
            </div>
            <div className='grid row-start-5 grid-cols-5 border-b border-gray-300 p-4 py-6 justify-center'>
                <h1 className='col-span-2 text-black uppercase tracking-wider font-bold'>customize metadata</h1>
                <span className='col-span-1 text-black mx-auto'></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
            </div>
            <div className='grid row-start-6 grid-cols-5 border-b border-gray-300 p-4 py-6 justify-center'>
                <h1 className='col-span-2 text-black uppercase tracking-wider font-bold'>advanced metrics</h1>
                <span className='col-span-1 text-black mx-auto'></span>
                <span className='col-span-1 text-black mx-auto'></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
            </div>
            <div className='grid row-start-7 grid-cols-5 border-b border-gray-300 p-4 py-6 justify-center'>
                <h1 className='col-span-2 text-black uppercase tracking-wider font-bold'>photo downloads</h1>
                <span className='col-span-1 text-black mx-auto'></span>
                <span className='col-span-1 text-black mx-auto'></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
            </div>
            <div className='grid row-start-8 grid-cols-5 border-b border-gray-300 p-4 py-6 justify-center'>
                <h1 className='col-span-2 text-black uppercase tracking-wider font-bold'>search engine indexing</h1>
                <span className='col-span-1 text-black mx-auto'></span>
                <span className='col-span-1 text-black mx-auto'></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
            </div>
            <div className='grid row-start-9 grid-cols-5 border-b border-gray-300 p-4 py-6 justify-center '>
                <h1 className='col-span-2 text-black uppercase tracking-wider font-bold'>custom analytics</h1>
                <span className='col-span-1 text-black mx-auto'></span>
                <span className='col-span-1 text-black mx-auto'></span>
                <span className='col-span-1 text-black mx-auto'><Check /></span>
            </div>

        </div>
        {/* 
          board mobile
         */}
        <div className=' sm:hidden grid grid-cols-3 mb-14'>
            <div className='col-span-3 border-b border-black'>
            <h1 className='text-black uppercase tracking-wider font-bold py-4'>the features</h1>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 col-span-3 border-b border-gray-300 py-6 '>
            <h1 className='text-black uppercase tracking-wider font-bold py-4 col-span-3'>unlimited story posting</h1>
            <div className='flex flex-col  gap-1 col-start-1 '>
                <span className='uppercase text-gray-400 tracking-wider'>basic</span>
                <Check />
            </div>
            <div className='flex flex-col  gap-1 col-start-2 '>
                <span className='uppercase text-gray-400 tracking-wider'>pro</span>
                <Check />
            </div>
            <div className='flex flex-col  gap-1 col-start-3 '>
                <span className='uppercase text-gray-400 tracking-wider'>business</span>
                <Check />
            </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 col-span-3 border-b border-gray-300 py-6 '>
            <h1 className='text-black uppercase tracking-wider font-bold py-4 col-span-3'>unlimited story upload</h1>
            <div className='flex flex-col  gap-1 col-start-1 '>
                <span className='uppercase text-gray-400 tracking-wider'>basic</span>
                <Check />
            </div>
            <div className='flex flex-col  gap-1 col-start-2 '>
                <span className='uppercase text-gray-400 tracking-wider'>pro</span>
                <Check />
            </div>
            <div className='flex flex-col  gap-1 col-start-3 '>
                <span className='uppercase text-gray-400 tracking-wider'>business</span>
                <Check />
            </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 col-span-3 border-b border-gray-300 py-6 '>
            <h1 className='text-black uppercase tracking-wider font-bold py-4 col-span-3'>embedding custom content</h1>
            <div className='flex flex-col  gap-1 col-start-1 '>
                <span className='uppercase text-gray-400 tracking-wider'>basic</span>
                <span></span>
            </div>
            <div className='flex flex-col  gap-1 col-start-2 '>
                <span className='uppercase text-gray-400 tracking-wider'>pro</span>
                <Check />
            </div>
            <div className='flex flex-col  gap-1 col-start-3 '>
                <span className='uppercase text-gray-400 tracking-wider'>business</span>
                <Check />
            </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 col-span-3 border-b border-gray-300 py-6 '>
            <h1 className='text-black uppercase tracking-wider font-bold py-4 col-span-3'>customize metadata</h1>
            <div className='flex flex-col  gap-1 col-start-1 '>
                <span className='uppercase text-gray-400 tracking-wider'>basic</span>
                <span></span>
            </div>
            <div className='flex flex-col  gap-1 col-start-2 '>
                <span className='uppercase text-gray-400 tracking-wider'>pro</span>
                <Check />
            </div>
            <div className='flex flex-col  gap-1 col-start-3 '>
                <span className='uppercase text-gray-400 tracking-wider'>business</span>
                <Check />
            </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 col-span-3 border-b border-gray-300 py-6 '>
            <h1 className='text-black uppercase tracking-wider font-bold py-4 col-span-3'>advanced metrics</h1>
            <div className='flex flex-col  gap-1 col-start-1 '>
                <span className='uppercase text-gray-400 tracking-wider'>basic</span>
                <span></span>
            </div>
            <div className='flex flex-col  gap-1 col-start-2 '>
                <span className='uppercase text-gray-400 tracking-wider'>pro</span>
                <span></span>
            </div>
            <div className='flex flex-col  gap-1 col-start-3 '>
                <span className='uppercase text-gray-400 tracking-wider'>business</span>
                <Check />
            </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 col-span-3 border-b border-gray-300 py-6 '>
            <h1 className='text-black uppercase tracking-wider font-bold py-4 col-span-3'>photo downloads</h1>
            <div className='flex flex-col  gap-1 col-start-1 '>
                <span className='uppercase text-gray-400 tracking-wider'>basic</span>
                <span></span>
            </div>
            <div className='flex flex-col  gap-1 col-start-2 '>
                <span className='uppercase text-gray-400 tracking-wider'>pro</span>
                <span></span>
            </div>
            <div className='flex flex-col  gap-1 col-start-3 '>
                <span className='uppercase text-gray-400 tracking-wider'>business</span>
                <Check />
            </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 col-span-3 border-b border-gray-300 py-6 '>
            <h1 className='text-black uppercase tracking-wider font-bold py-4 col-span-3'>search engine indexing</h1>
            <div className='flex flex-col  gap-1 col-start-1 '>
                <span className='uppercase text-gray-400 tracking-wider'>basic</span>
                <span></span>
            </div>
            <div className='flex flex-col  gap-1 col-start-2 '>
                <span className='uppercase text-gray-400 tracking-wider'>pro</span>
                <span></span>
            </div>
            <div className='flex flex-col  gap-1 col-start-3 '>
                <span className='uppercase text-gray-400 tracking-wider'>business</span>
                <Check />
            </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 col-span-3 border-b border-gray-300 py-6 '>
            <h1 className='text-black uppercase tracking-wider font-bold py-4 col-span-3'>custom analytics</h1>
            <div className='flex flex-col  gap-1 col-start-1 '>
                <span className='uppercase text-gray-400 tracking-wider'>basic</span>
                <span></span>
            </div>
            <div className='flex flex-col  gap-1 col-start-2 '>
                <span className='uppercase text-gray-400 tracking-wider'>pro</span>
                <span></span>
            </div>
            <div className='flex flex-col  gap-1 col-start-3 '>
                <span className='uppercase text-gray-400 tracking-wider'>business</span>
                <Check />
            </div>
            </div>


        </div>
        
    </div>
  )
}
