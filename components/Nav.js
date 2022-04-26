import React from 'react'
import request from '../utils/request'
import { useRouter } from 'next/router'
const Nav = () => {
    const router = useRouter()
    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 tex-2xl whitespace-nowrap space-x-10 sm:space-x-20 scrollbar-hide overflow-x-scroll'>
                {Object.entries(request).map(([key, { title, url }]) => (
                    <h1 className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:red-500'
                        onClick={() => router.push(`/?genre=${key}`)} key={key}>{title}</h1>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'></div>
        </nav>
    )
}

export default Nav