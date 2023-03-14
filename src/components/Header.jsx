import React from 'react'
import { useParallax } from 'react-scroll-parallax';

const Header = () => {

  const { ref } = useParallax({ translateY: [-22, 20] });

  return (    
    <>
      <div className='h-screen' >
        <div ref={ref} className='bg-[url(/imgs/main1.jpg)] z-[-10] bg-cover 
      bg-center absolute left-0 right-0 w-full h-[110vh]' />
        <div className='bg-[#0D0D0D38] h-full w-full text-white z-0 relative flex flex-col justify-center overflow-hidden'>
          <h1 className='text-center text-6xl pb-4' >BLUE FIN SUSHI</h1>
          <p className='text-center text-sm' >Powell River's favourite Japanese place.</p>
        </div>
      </div>
    </>

  )
}

export default Header