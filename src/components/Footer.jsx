import React from 'react'
import { FaInstagram, FaFacebookF, FaYelp, FaTripadvisor } from 'react-icons/fa';


const Footer = () => {



  return (
    <div className='bg-footer px-4 md:px-[20vw]' >
      <h2 className='text-2xl py-6' >BLUE FIN SUSHI</h2>
      <div className='flex flex-col md:flex-row justify-between gap-6' >
        <div className='flex flex-col gap-2 pb-8' >
          <h6 className='text-2xl py-4' >LOCATION</h6>
          <p className='text-lg' >4801 Joyce Ave</p>
          <p className='text-lg' >Powell River BC</p>
          <p className='text-lg' >V8A 3B7</p>
        </div>
        <div className='flex flex-col gap-2 pb-8' >
          <h4 className='text-xl pb-4' >HOURS</h4>
          <h5 className='text-xl pb-4' >OPEN EVERYDAY</h5>
          <p className='text-lg' >11:30 am - 3:00 pm (Last Call 2:30pm)</p>
          <p className='text-lg' >5:00 pm - 10:00 pm (Last Call 9:30pm)</p>
        </div>
      </div>
      <div className='flex justify-around m-auto w-3/5 pb-6' >
        <a href="https://www.instagram.com/bennett.humphrey/" target='_blank' aria-label='Follow us on Instagram!'>
          <FaInstagram className='w-6 h-6 hover:fill-white hover:scale-125 hover:cursor-pointer duration-500' />
        </a>
        <FaFacebookF className='w-6 h-6 hover:fill-white hover:scale-125 hover:cursor-pointer duration-500' />
        <FaYelp className='w-6 h-6 hover:fill-white hover:scale-125 hover:cursor-pointer duration-500' />
        <FaTripadvisor className='w-6 h-6 hover:fill-white hover:scale-125 hover:cursor-pointer duration-500' />
      </div>
      <h6 className='text-center pb-10' >Website built by <a className='underline inline-block hover:translate-x-2 hover:scale-110 duration-300' href="https://bennetthumphrey.com/">Bennett Humphrey</a></h6>
    </div>
  )
}

export default Footer