import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ToggleThemeBtn from './ToggleThemeBtn'

const Header = () => {
    return (
        <header className='container mx-auto px-3 py-2 sticky top-0 z-100 text-sm md:text-lg'>
            <nav className='flex justify-between items-center px-3 py-1 md:px-5 md:py-2 bg-white/80 backdrop-blur rounded-lg border border-gray shadow-lg'>
                <Link href="/">
                    <Image src={'/algeriePostLogo.svg'} alt="logo" width={30} height={30} />
                </Link>

                <ul className='flex gap-5'>
                    <li>
                        <Link href="#about">about</Link>
                    </li>
                    <li>
                        <Link href="#features">features</Link>
                    </li>
                    <li>
                        <Link href="#contact">contact</Link>
                    </li>
                </ul>

                <div className='flex gap-1'>
                    <Link href="/login" className='px-1.5 bg-primary rounded-md border border-gray text-slate-200'>login</Link>
                    <Link href="/signup" className='px-1.5 rounded-md border border-gray'>signup</Link>
                    <ToggleThemeBtn className='hidden md:flex' />
                </div>
            </nav>
        </header>
    )
}

export default Header