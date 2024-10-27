import React from 'react'
import Image from 'next/image'
import image from '../images/Rectangle 616.png'
import images from '../images/Rectangle 640.png'

function Card2() {
  return (
    <>

      <div className='flex'>


        <div className=' absolute w-[400px] lg:w-[680.34px] h-[580px] lg:h-[530.45px] top-[4800px] lg:top-[3200.31px] left-[18.66px] bg-[#E1724C]'>

          <div className='absolute w-[250px] lg:w-[300px] h-[300.43px] m-9 ml-[80px]  lg:m-16 top-[3572.62px]lg:left-[96px] '>
            <Image className='object-cover w-full ' src={image} alt='image' />
          </div>

          <div className='absolute w-[430.8px] h-[120px] top-[280.1px] left-6 lg:left-[145.2px] font-Ginger font-normal text-[40px] leading-[38px] text-[#FFFFFF]'>
            Indulge your senses and elevate your lifestyle
          </div>

          <div className=' w-[350px] lg:w-[406.8px]  h-[120px] top-[380px] absolute left-6 lg:left-[200.2px] font-Inter font-medium text-[14px] lg:text-[12px] leading-5 text-[#FFFFFF]'>
            <p className=' mt-10 lg:mt-5'>Indulge your senses and elevate your lifestyle with our curated collection of gourmet delights and luxurious lifestyle essentials. At Gourmet, Lifestyle & More, we believe in the art of savoring life's finest moments, and we've brought together a selection that embodies the epitome of taste, style, and sophistication.</p>
          </div>
        </div>




        <div className=' absolute lg:inline hidden w-[615.34px] h-[410.45px] top-[3130.31px] left-[700.66px] ml-4  bg-[#DCB33E]'>

          <div className='absolute w-[300px] h-[300.43px] m-16 top-[3572.62px]left-[96px]'>
            <Image src={images} alt='image' />
          </div>

          <div className='absolute w-[430.8px] h-[120px] top-[280.1px] left-[145.2px] font-Ginger font-normal text-[40px] leading-[38px] text-[#FFFFFF]'>
            Indulge your senses and elevate your lifestyle
          </div>

        </div>

      </div>

    </>
  )
}

export default Card2
