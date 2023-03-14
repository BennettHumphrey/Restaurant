import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white pt-10 pb-8' >
      <div  className='h-px w-4/5 bg-[#BBB] mx-auto mb-10' />
      <div className='flex flex-col justify-center gap-3 px-4' >
        <h3 className='text-6xl text-center' >HOURS</h3>
        <h5 className='text-center text-2xl' >Monday-Sunday</h5>
        <h6 className='text-center text-lg' >11:30 - 3:00 PM</h6>
        <h6 className='text-center text-lg'>5:00 - 10:00 PM</h6>
        <p className='text-center' >Blue Fin Sushi is not currently taking any reservations.</p>
      </div>
      <div  className='h-px w-4/5 bg-[#BBB] my-10 mx-auto' />
      <div className='flex flex-col justify-center gap-3' >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.776140036443!2d-124.52242603848084!3d49.84691773256487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5487e6c5bbcb6c37%3A0xd7b38552462cfdea!2s4801%20Joyce%20Ave%2C%20Powell%20River%2C%20BC%20V8A%203B7%2C%20Canada!5e0!3m2!1sen!2spe!4v1678835929427!5m2!1sen!2spe" 
      width="600" height="450"
      allowfFllscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      className='grayscale h-[30vw] w-[80vw] m-auto'/>
        <h3 className='mt-5 text-center text-4xl' >DOWNTOWN</h3>
        <h5 className='text-center text-xl'>4801 Joyce Ave</h5>
        <h6 className='text-center' >Powell River, BC V8A 3B7</h6>
        <h6 className='text-center text-lg' >778.555.8932</h6>
        <h6 className='text-center' >bennetthumphrey98@gmail.com</h6>
      </div>
    </div>
  )
}

export default Contact