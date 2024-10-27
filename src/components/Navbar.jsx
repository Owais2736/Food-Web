'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import image from '../images/Group 2.png'
import Button from '@/components/Button'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='container w-full h-[334.75px]   text-white ml-10'>


        <div className='flex items-center relative justify-between lg:flex-row   lg:items-center  lg:flex lg:justify-between'>





          <div className='nav w-[991px] h-[85px] top-[21.56px] left-[41.36px] gap-[353px] flex lg:pl-0'>


            <div className='flex  lg:static'>
              <div className='font-Poppins font-bold leading-[84.36px]  text-[38.04px] tracking-wide'>CL</div>
              <div className='font-Poppins font-bold leading-[84.36px]  text-[38.04px] tracking-wide w-[17.6px]  h-[13.58px] top-[47.11px] mt-1 mr-1 left-[60.18px] text-[#E1724C]' >9</div>
              <div className='font-Poppins font-bold leading-[84.36px]  text-[38.04px] tracking-wide'> UD</div>
            </div>

            <div className="invert absolute top-5 left-[300px] lg:hidden cursor-pointer" onClick={toggleNavbar}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div
              className={`fixed top-0 left-0 h-full w-[250px]  p-5 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 lg:static lg:flex lg:flex-row lg:gap-8 mt-4 lg:mt-0 items-center text-[12px] tracking-wide`}
            >


              <div className={`w-[142px] justify-between ml-[40px] lg:ml-[200px] gap-4 lg:gap-8 lg:flex-row flex-row flex ${isOpen ? 'flex' : 'hidden'} lg:flex lg:gap-12  mt-4 lg:mt-0 h-[85px] flex gap-8 items-center text-[12px] tracking-wide `}>

                <div className='hover:font-bold cursor-pointer flex flex-col lg:flex-row  lg:gap-12 '>ABOUT</div>
                <div className='hover:font-bold cursor-pointer flex flex-col lg:flex-row  lg:gap-12 '>FOOD</div>
                <div className='hover:font-bold cursor-pointer flex flex-col lg:flex-row  lg:gap-12 '>BEAVERAGES</div>
                <div className='hover:font-bold cursor-pointer flex flex-col lg:flex-row  lg:gap-12 '>LIFESTYLE</div>

              </div>




              <div className='items-center ml-[500px] mt-[-40px] lg:block hidden '>

                <Button title={"MY CART"} />
              </div>

            </div>

          </div>
        </div>


      </div>



    </>
  )
}

export default Navbar


