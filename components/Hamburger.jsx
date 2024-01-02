'use client'
import useHamburger from '@/hooks/useHamburger'
import React from 'react'

export default function Hamburger() {

const hamburger = useHamburger()

const handleClick = () => {
    if(hamburger.isOpen){
        hamburger.onClose()
    } else {
        hamburger.onOpen()
    }
}

  return (
    <div className='lg:hidden'>
        <button 
        onClick={handleClick}
        className={`flex flex-col justify-center items-center gap-1.5 ${hamburger.isOpen ? '' : '' }`}>
        <div className={`w-5 h-[0.150rem] bg-black rounded-lg transition-all ease ${hamburger.isOpen ? 'rotate-45 translate-y-1 ' : ' '}`}></div>
        <div className={`w-5 h-[0.150rem] bg-black rounded-lg transition-all  ease ${hamburger.isOpen ? '-rotate-45 -translate-y-1 ' : ''}`}></div>
        </button>
    </div>
  )
}
