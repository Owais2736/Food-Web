import React from 'react'
import Image from 'next/image'
import image from '../images/Rectangle 629.png'
import img from '../images/Rectangle 630.png'
import img1 from '../images/Rectangle 631.png'
import img2 from '../images/Rectangle 632.png'
import img3 from '../images/Rectangle 633.png'
import img4 from '../images/Rectangle 634.png'



function Card3() {
  let data = [{ src: image }, { src: img }, { src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }] // New path with updated name

  return (
    <div className='flex'>
      {data.map((item, index) => (
        <div >
          <div key={index} className={`w-[210px] h-[289px] top-[2400px] lg:top-[2323px] left-[6px] relative z-20 ml-3 ${index === 1 ? 'mt-0 lg:mt-8' : ""} ${index === 3 ? 'lg:block hidden' : ''}  ${index === 4 ? 'lg:block hidden' : ''}  ${index === 5 ? 'lg:block hidden' : ''}  ${index === 6 ? 'lg:block hidden' : ''}  ${index === 2 ? 'lg:block hidden' : ''} ${index === 0 || index === 5 ? "" : 'mt-8'}`}>
            <Image className='absolute' src={item.src} alt='image' layout='responsive' width={400} height={300} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card3


