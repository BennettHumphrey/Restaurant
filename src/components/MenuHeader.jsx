import React from 'react'

const MenuHeader = () => {
  return (
    <div className='bg-[url(./resources/imgs/menu1.jpg)] bg-center h-[40vh] bg-cover' >
      <div className='bg-[#0D0D0D50] flex flex-col h-full w-full items-center justify-center'>
        <h2 className='text-white text-center text-7xl mb-4 mx-2' >MENU</h2>
        <h3 className='text-white text-center text-lg mx-2' >Authentic Japanese fusion made with highest quality ingredients.</h3>
      </div>
    </div>
  )
}

export default MenuHeader