import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white pt-10 pb-8' >
      <div  className='h-px w-4/5 bg-[#BBB] mx-auto mb-10' />
      <div className='flex flex-col justify-center gap-3 px-4' >
        <h3 className='text-7xl text-center' >HOURS</h3>
        <h5 className='text-center text-2xl' >Monday-Sunday</h5>
        <h6 className='text-center text-lg' >11:30 - 3:00 PM</h6>
        <h6 className='text-center text-lg'>5:00 - 10:00 PM</h6>
        <p className='text-center' >Nubo Japanese Tapas is not currently taking any reservations.</p>
      </div>
      <div  className='h-px w-4/5 bg-[#BBB] my-10 mx-auto' />
      <div className='flex flex-col justify-center gap-3' >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.498394382336!2d-123.3656124840127!3d48.4277735792477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f7485ab4d184b%3A0xf645d0d46d7b0159!2sNubo%20Japanese%20Tapas!5e0!3m2!1sen!2spe!4v1678139814794!5m2!1sen!2spe" 
      width="600" height="450" allowFullScreen="" 
      loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      className='grayscale h-[30vw] w-[80vw] m-auto'/>
        <h3 className='mt-5 text-center text-4xl' >DOWNTOWN</h3>
        <h5 className='text-center text-xl'>739 Pandora Avenue</h5>
        <h6 className='text-center' >Victoria, BC V8W 1N9</h6>
        <h6 className='text-center text-lg' >778.265.9909</h6>
        <h6 className='text-center' >info@nubotapas.com</h6>
      </div>
    </div>
  )
}

export default Contact