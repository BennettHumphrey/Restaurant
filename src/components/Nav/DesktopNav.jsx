import React from 'react'
import { navOptions } from '../../resources/data'

const DesktopNav = ({setScrolled}) => {
  return (
    <div className='sticky bg-main z-10 flex justify-evenly item-center h-12 text-xl w-full md:w-2/5' >
        {navOptions.map((o, i) => (
                    <a key={i} onClick={() => setScrolled(true)} onTouchEnd={() => setScrolled(true)} 
                    className='h-full flex items-center px-6 duration-500 flex-col justify-center group
                      hover:bg-menu hover:text-text-light active:bg-menu active:text-text-light active:duration-0' 
                      href={o.href}>
                        <p>{o.title}</p>
                        <div className='h-px w-0 group-hover:w-full duration-500 bg-white relative -top-[2px]'/>
                    </a>
                ))}
    </div>
  )
}

export default DesktopNav