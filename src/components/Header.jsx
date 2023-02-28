import React from 'react'

const Header = () => {
  return (

    //No idea why, but this dickhead is showing up above the mobile nav
      <div className='text-white bg-[url(./resources/imgs/food1.jpg)] z-0 relative bg-cover h-screen flex flex-col justify-center overflow-hidden' >
        <h1 className='text-center' >NUBO JAPANESE TAPAS</h1>
        <p className='text-center' >Victoria's favourite Japanese place.</p>
      </div>
  )
}

export default Header