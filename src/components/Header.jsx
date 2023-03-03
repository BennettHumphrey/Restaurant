import React from 'react'

const Header = () => {
  return (

    //No idea why, but this is showing up above the mobile nav
    
    <>

      {/* <div className='z-0' >
        <img src='../../src/resources/imgs/food1.jpg' className='absolute h-1/3 z-0' />
      </div> */}
      <div className='
      bg-[url(./resources/imgs/main1.jpg)] bg-center
      bg-cover h-screen ' >
        <div className='bg-[#0D0D0D38] h-full w-full text-white z-0 relative flex flex-col justify-center overflow-hidden'>
          <h1 className='text-center text-6xl pb-4' >NUBO JAPANESE TAPAS</h1>
          <p className='text-center text-sm' >Victoria's favourite Japanese place.</p>
        </div>
      </div>
    </>

  )
}

export default Header