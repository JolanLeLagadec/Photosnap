'use client'
import useHamburger from '@/hooks/useHamburger'
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

export default function MobileMenu() {

    const hamburgerMenu = useHamburger()
    if (!hamburgerMenu.isOpen) {
        return;
    }
    return (
        <div className='bg-opacity-70 fixed w-full bg-neutral-950 h-screen lg:hidden'>
            <div className='flex flex-col justify-center items-center gap-4 bg-white p-4 '>
                <div className='flex flex-col items-center justify-center gap-4 border-b border-gray-200 w-full py-3 uppercase font-semibold'>
                    <Link onClick={() => hamburgerMenu.onClose()} href='/stories'>stories</Link>
                    <Link onClick={() => hamburgerMenu.onClose()} href='/features'>features</Link>
                    <Link onClick={() => hamburgerMenu.onClose()} href='/pricing'>pricing</Link>
                </div>
                <Button className='-py-2 w-full rounded-none text-white uppercase tracking-widest bg-black md:w-1/2 md:mx-auto'>get an invite</Button>

            </div>

        </div>
    )
}
