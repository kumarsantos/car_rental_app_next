'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoIcon from '../public/logo.svg';
import { CustomButton } from '.';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/login')
    }
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href='/' className='flex justify-center items-center'>
                    <Image src={LogoIcon} alt='car hub logo' width={118} height={18} className='object-contain' />
                </Link>
                <CustomButton
                    title='Sign In'
                    type='button'
                    containerStyles='text-primary-blue bg-white rounded-full min-w-[130px]'
                    handleClick={handleClick}
                />
            </nav>
        </header>
    )
}

export default Navbar