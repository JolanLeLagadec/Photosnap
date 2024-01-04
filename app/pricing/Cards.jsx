'use client'
import React, { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

export default function Cards() {

  const [isYearly, setIsYearly] = useState(false)
  

  return (
    <div className='container sm:col-span-3 row-start-2  mt-16 mb-24'>
      <div className='flex gap-3 items-center justify-center '>
        <span className={`font-bold text-gray-400${isYearly === false ? 'text-black' : '' }`}>Monthly</span>
        <Switch checked={isYearly} onCheckedChange={ () => setIsYearly(!isYearly) } />
        <span className={`font-bold text-gray-400${isYearly === true ? 'text-black' : ''}`}>Yearly</span>
      </div>
      <div className='grid mt-14 gap-4 h-full items-center'>
        <div className='relative col-span-1 lg:col-start-1 bg-gray-200 p-6 flex flex-col sm:items-left lg:items-center justify-center gap-3 '>
          <span className='font-semibold text-black text-2xl'>Basic</span>
          <p className='leading-7 max-w-xs text-black sm:text-left lg:text-center'>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
          <div className='hidden sm:absolute sm:flex flex-col items-center lg:hidden sm:top-0 sm:right-6  '>
          {
            isYearly ? 
            <>
            <h1 className='text-4xl font-bold text-black mt-4'>$190.00</h1>
            <span className='text-gray-500'>per year</span>
            </>
            :
            <>
            <h1 className='text-4xl font-bold text-black mt-4'>$19.00</h1>
            <span className='text-gray-500'>per month</span>
            </>
          }
          
          
          
          </div>
          {
            isYearly ? 
            <>
            <h1 className='sm:hidden lg:block text-4xl font-bold text-black mt-4'>$190.00</h1>
            <span className='sm:hidden lg:block text-gray-500'>per year</span>
            </>
            :
            <>
            <h1 className='sm:hidden lg:block text-4xl font-bold text-black mt-4'>$19.00</h1>
            <span className='sm:hidden lg:block text-gray-500'>per month</span>
            </>
          }
         
          
          <Button className='bg-black rounded-none uppercase w-full -py-2 tracking-widest mt-6 sm:w-1/2 lg:w-full'>pick plan</Button>

        </div>
        <div className='relative shadow-lg bg-black col-span-1 lg:col-start-2 p-6 flex flex-col  sm:items-left lg:items-center justify-center gap-3 h-full'>
          <span className='font-semibold text-white text-2xl'>Pro</span>
          <p className='leading-7 max-w-xs text-gray-200 sm:text-left lg:text-center'>More advanced features available. Recommended for photography veterans and professionals.</p>
          <div className='hidden sm:absolute sm:flex flex-col items-center lg:hidden sm:top-0 sm:right-6  '>
          {
            isYearly ? 
            <>
             <h1 className='text-4xl font-bold text-white mt-4'>$390.00</h1>
             <span className='text-gray-500'>per year</span>
            </>
           
            :
            <>
            <h1 className='text-4xl font-bold text-white mt-4'>$39.00</h1>
            <span className='text-gray-500'>per month</span>
            </>
          }
          
          
          </div>
          {
            isYearly ? 
            <>
             <h1 className='sm:hidden lg:block text-4xl font-bold text-white mt-4'>$399.00</h1>
             <span className='sm:hidden lg:block text-gray-500'>per year</span>
             </> 
            :
            <>
             <h1 className='sm:hidden lg:block text-4xl font-bold text-white mt-4'>$39.00</h1>
             <span className='sm:hidden lg:block text-gray-500'>per month</span>
            </>
           
          }
         
         
          <Button className='bg-white text-black font-semibold rounded-none uppercase w-full -py-2 tracking-widest mt-6 sm:w-1/2 lg:w-full'>pick plan</Button>

        </div>
        <div className='relative col-span-1 lg:col-start-3 bg-gray-200 p-6 flex flex-col sm:items-left lg:items-center justify-center gap-3 '>
          <span className='font-semibold text-black text-2xl'>Business</span>
          <p className='leading-7 max-w-xs text-black sm:text-left lg:text-center'>Additional features available such as more detailed metrics. Recommended for business owners.</p>
          <div className='hidden sm:absolute sm:flex flex-col items-center lg:hidden sm:top-0 sm:right-6  '>
          {
            isYearly ? 
            <>
            <h1 className='text-4xl font-bold text-black mt-4'>$990.00</h1>
            <span className='text-gray-500'>per year</span>
            </>
            :
            <>
            <h1 className='text-4xl font-bold text-black mt-4'>$99.00</h1>
            <span className='text-gray-500'>per month</span>
            </>
          }
          </div>
          {
            isYearly ? 
            <>
           <h1 className='sm:hidden lg:block text-4xl font-bold text-black mt-4'>$990.00</h1>
            <span className='text-gray-500'>per year</span>
            </>
            :
            <>
           <h1 className='sm:hidden lg:block text-4xl font-bold text-black mt-4'>$99.00</h1>
            <span className='text-gray-500'>per month</span>
            </>
          }  
          
          <Button className='bg-black rounded-none uppercase w-full -py-2 tracking-widest mt-6 sm:w-1/2 lg:w-full'>pick plan</Button>

        </div>

      </div>
    </div>
  )
}
