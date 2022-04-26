import React from 'react'

function HeaderItem({ Icon, title }) {
    return (
        <div className='flex group flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
            <Icon className='h-8 mb-1 group-hover:animate-bounce' />
            <p className='opacity-0 tracking-widest group-hover:opacity-100 transition-opacity' >{title}</p>
        </div>
    )
}

export default HeaderItem