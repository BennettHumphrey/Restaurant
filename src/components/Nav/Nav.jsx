import React from 'react';
import { useWindowWidth } from '../useWindowWidth';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = () => {

    const width = useWindowWidth();

  return (
    <div  className='sticky top-0 text-white bg-black flex flex-col md:flex-row w-full md:justify-between md:pr-3' >
        <div className='flex items-center md:w-2/5' >
            <h1 className='text-2xl px-2 pt-2 md:pt-0 bg-accent text-text-light w-screen text-center' >NUBO JAPANESE TAPAS</h1>
        </div>
        {width > 768 ? <DesktopNav  /> : <MobileNav  />}
    </div>
  )
}





export default Nav