import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { HomeIcon, BadgeCheckIcon, SearchCircleIcon, UserIcon, LightningBoltIcon } from '@heroicons/react/outline'
export const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='Home' Icon={HomeIcon} />
                <HeaderItem title='Search' Icon={SearchCircleIcon} />
                <HeaderItem title='Verified' Icon={BadgeCheckIcon} />
                <HeaderItem title='Aman' Icon={UserIcon} />
                <HeaderItem title='Trending' Icon={LightningBoltIcon} />
            </div>
            <Image
                className='object-contain'
                src='/Daco_6143056.png'
                width={200}
                height={100} alt='' />
        </header>
    )
}
