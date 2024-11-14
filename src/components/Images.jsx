import React from 'react'
import { images } from '../resources/data'

const Images = () => {
  return (
    <div className='bg-white pb-12 ' >
      <div className='grid grid-cols-2 md:grid-cols-4 gap-[6vw] px-[5vw] pb-8 bg-white' >
        {images.map((x, i) => (
          <img key={i} width={500} height={375} src={x} alt={`Menu image ${i+1}`}
          className="h-full"/>
        ))}
      </div>
      <div className='h-px w-4/5 bg-[#BBB] mt-10 mx-auto' />
    </div>
  )
}

export default Images