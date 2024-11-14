import React from 'react'
import { useParallax } from 'react-scroll-parallax';

const MenuHeader = () => {

  const { ref } = useParallax({ translateY: [-22, 20] });

  return (
    <div id='menu' className='h-[40vh]' >
      <div ref={ref} className='bg-[url(/imgs/menu1.webp)] z-[-10] bg-cover 
      bg-center absolute left-0 right-0 w-full h-[65vh] sm:h-[80vh]' />
      <div className='bg-[#0D0D0D50] flex flex-col h-full w-full items-center justify-center'>
        <h2 className='text-white text-center text-7xl mb-4 mx-2' >MENU</h2>
        <h3 className='text-white text-center text-lg mx-2' >Authentic Japanese fusion made with highest quality ingredients.</h3>
      </div>
    </div>
  )
}

export default MenuHeader