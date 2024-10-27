import Image from "next/image";
import img from '../images/Mask group.png'
import imagee from '../images/Group 23.png'
import im from '../images/Rectangle 607.png'
import images from '../images/Group 57.png'
import vec1 from '../images/Vector 78.png'
import vec2 from '../images/Vector 79.png'
import sec1 from '../images/avocado-toast-with-egg-and-pomegrate-seeds-on-blac-2021-10-15-11-33-16-utc 1.png'
import sec2 from '../images/Rectangle 603.png'
import sec4 from '../images/Rectangle 605.png'
import sec3 from '../images/Rectangle 602.png'
import sec5 from '../images/Rectangle 601.png'
import sec6 from '../images/Rectangle 604.png'
import sec7 from '../images/image 22.png'
import sect1 from '../images/knife-icon 1.png'
import stroies from '../images/Stories.png'
import lineImage from '../images/Rectangle 617.png'
import vec3 from '../images/Group 16.png'
import vec4 from '../images/Group 17.png'
import rec1 from '../images/Rectangle 621.png'
import rec2 from '../images/Rectangle 625.png'
import rec3 from '../images/Rectangle 622.png'
import rec4 from '../images/Rectangle 624.png'
import rec5 from '../images/Rectangle 623.png'
import mediaImage from '../images/media.png'

import Navbar from '@/components/Navbar'
import Button from "@/components/Button";
import Card from '@/components/Card'
import Card2 from '@/components/Card2'
import Card3 from '@/components/Card3'




export default function Home() {
  return (
    <>
      <div className="absolute z-10">

        <Navbar />
      </div>

      <div className="con lg:w-full w-full lg:h-[645.26px] h-[738px]  top-[-32.8px] left-[-53.77px]">
        <Image className="object-cover h-full w-full" src={img} alt="image" />
      </div>


      <div className="w-full  h-[1102.22px] top-[-45.64px] left[248.89px]">
        <Image className="absolute  top-[180px]  lg:top-20 rotate-[-38.67%] w-[784.17px] h-[784.17px] left-2 lg:left-[280.99px] z-20" src={imagee} alt="img" />
      </div>

      <div className="absolute w-[300px]  lg:w-[400.65px] h-[190px] lg:h-[145.32px] top-40 lg:top-[330.14px] left-16 lg:left-[130.13px] rounded-[50px] lg:rounded-[148px] bg-[#DCB33E] z-10">
        <Image src={im} alt="image" />
        <p className={`absolute w-[235.55px] h-[79px] top-[28px] lg:top-[30.3px] left-[40px] lg:left-[70.67px] text-[16px] lg:text-[14px] leading-5 lg:leading-4 font-semibold text-[#F6F6F6]`}>
          With a deep-rooted love for all things seafood, our talented chefs combine culinary expertise
          with creativity to craft dishes that celebrate the ocean's treasures.
        </p>
      </div>

      <div className=" top-[600px] lg:top-[490px]  lg:left-[66-53px] pl-10 absolute w-full h-[145px] z-30 ">
        <h1 className=" lg:inline hidden  font-normal text-[110.15px] leading-[144.64px] text-[#FFFFFF]">Gourmet, Lifestyle & More</h1>
        <h1 className=" inline lg:hidden ml-[-55px] font-normal text-[120.15px] leading-[144.64px] text-[#FFFFFF]">Gourmet</h1>
      </div>




      <div className="main flex">
        <div className="absolute w-[689.19px] h-[91.94px] top-[850px] lg:top-[750.41px] left-[40px] lg:left-[160.67px]">

          <h2 className="text-[#151515]  font-normal text-[60px] lg:text-[60px] leading-1 lg:leading-[77.4px]">Delicious And <br />
            <span className="ml-[55px] lg:ml-0 ">Nutritious</span> <br className="lg:hidden " /> <span className="ml-[55px] lg:ml-0 ">Cuisine</span> </h2></div>


        <div className="flex ">
          <div className="absolute w-[117.61px] h-[117.61px] top-[1150px] lg:top-[940.59px] left-[165px] lg:left-[351.27px] rounded-[79.3px]">
            <Image src={images} alt="image" />
          </div>

          <div className="absolute w-[330px] lg:w-[415.73px] h-[200px] lg:h-[100px] top-[1300px] lg:top-[950px] left-[50px] lg:left-[500.71px]">
            <p className=" text-[14px lg:text-[12px] font-normal  leading-5 text-[#797979]">Indulge your senses and elevate your lifestyle with our curated collection of gourmet delights and luxurious lifestyle essentials. At Gourmet, Lifestyle & More, we believe in the art of savoring life's finest moments, and we've brought together a selection that embodies the epitome of taste, style, and sophistication.</p>
          </div>

          <div className="absolute lg:inline hidden w-[65.94px] h-[63.91px] top-[960.05px] left-[930.77px] border-6 text-[#D9D9D9]">
            <Image src={vec1} alt="vec" />

          </div>
          <div className="absolute lg:inline hidden  w-[65.94px] h-[63.91px] top-[960.05px] left-[930.77px] border-6 text-[#D9D9D9]">
            <Image src={vec2} alt="vec" />
          </div>
        </div>
      </div>





      <div className="sectionMain flex">
        <div className="z-40 mt-[310px] lg:mt-[-170px] ml-40 lg:ml-[710px] " >
          <Button title={"ORDER NOW"} />
        </div>

        <div className='left absolute w-[410px] lg:w-[620.08px] h-[565.7px] top-[1490px] lg:top-[1167.58px] left-[10px]'>
          <Image src={sec1} alt="image" />
        </div>


        <div className="flex ">

          <div className="img1 absolute w-[51px] h-[145px] lg:h-[160.44px] top-[1810px] lg:top-[1205.11px] left-3 lg:left-[645.54px]">
            <Image className="object-cover h-full w-full" src={sec2} alt="image" />
          </div>
          <div className="img2 absolute w-[345.74px] h-[217.97] top-[1810px] left-[75px] lg:top-[1167.58px] lg:left-[710.6px]">
            <Image src={sec3} alt="image" />
          </div>
          <div className="img3 absolute w-[50px] lg:w-[235.44px] h-[217.97px] top-[1965px] lg:top-[1167.58px] left-3 lg:left-[1070.1px]">
            <Image src={sec4} alt="image" />
          </div>


          <div className="">
            <Image className="w-[400px] lg:w-[340.08px] h-[118.48px] top-[2230px] lg:top-[1375.56px] left-4 lg:left-[645.54px] absolute" src={sec5} alt="image" />
            <p className="w-[320.41px] h-[80px] absolute top-[2040px] lg:top-[1510.69px] left-14 lg:left-[665.98px]  font-normal text-[14px] lg:text-[12px] leading-5 text-[#797979]">Indulge your senses and elevate your lifestyle with our curated collection of gourmet delights and luxurious lifestyle essentials. At Gourmet, Lifestyle & Mor</p>
          </div>

          <div>
            <Image className="w-[340.08px] lg:inline hidden h-[280.13px] top-[1375.56px] left-[998.5px] absolute" src={sec6} alt="image" />
            <Image className="w-[254.67px] lg:inline hidden h-[254.67px] top-[1390.79px] left-[1061.71px] absolute " src={sec7} alt="image" />
          </div>
        </div>
      </div>



      <div className="w-[46.73px] h-[46.73px] top-[2390px] lg:top-[1730.63px] left-[200px] lg:left-[625.63px] absolute">
        <Image src={sect1} alt="image" />
      </div>

      <div className=" absolute w-[1115.04px] h-[91.94px] top-[2470px] lg:top-[1820.65px] text-[#151515] left-5 lg:left-[199px] font-normal leading-[74.58px] items-center text-[40px] lg:text-[50px]">
        <h2 className="ml-1">A Place Where Food, <br className="lg:hidden" /> Design, And Ambiance <br /> &nbsp; &nbsp;  Come Together To <br className="lg:hidden" /> Create A Memorable <br />&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className="lg:inline hidden">Experience.</span> </h2>
      </div>




      <div className="lg:mt-20 mt-[500px] z-20 relative ">
        <Card />
      </div>




      <div className="w-[1320px] lg:inline hidden h-[446.75px] absolute top-[2260px] bg-[#BEDACE] z-10 ml-3">
      </div>

      <div className=" lg:inline hidden absolute w-[334.23px] h-[120px] top-[2510.64px] z-20 left-[880.8px]   font-normal text-[12px] leading-5 text-[#797979] ">
        <p>Stories
          Indulge your senses and elevate your lifestyle with our curated collection of gourmet delights and luxurious lifestyle essentials. At Gourmet, Lifestyle & More, we believe in the art of savoring life's finest moments, and we've brought together a selection that embodies the epitome of taste, style, and sophistication.</p>
      </div>


      <div className="w-full lg:inline hidden h-[557px] top-[2600.24px] z-30 left-[-1.81px] absolute ">
        <Image src={stroies} alt="image" />
      </div>


      <div className=" absolute w-[1010.04px] h-[247.71px] z-40 top-[4250px] lg:top-[2842.42px] pr-8 left-5 lg:left-[211px]  font-normal text-[40px] lg:text-[47px] leading-1 lg:leading-[74.58px] text-[#151515]" >
        <p>Indulge In Exquisite <br className="lg:hidden inline" />Tastes, Elevate Daily <br className="lg:hidden inline" /> Rituals, And Embrace <br className="lg:hidden inline" /> Luxury. Experience <br className="lg:hidden inline" />Life's Finest Moments <br className="lg:hidden inline" /> With Our Curated <br className="lg:hidden inline" />Collection Of Lifestyle <br className="lg:hidden inline" />Essentials.</p>
      </div>



      <Card2 />

      <div className='w-[406.8px] mt-16 lg:block hidden  h-[120px] top-[1020px] relative left-[770.2px]  font-medium text-[12px] leading-5 text-[#000000]'>
        <p>Indulge your senses and elevate your lifestyle with our curated collection of gourmet delights and luxurious lifestyle essentials. At Gourmet, Lifestyle & More, we believe in the art of savoring life's finest moments, and we've brought together a selection that embodies the epitome of taste, style, and sophistication.</p>
      </div>



      <div className="head flex ">

        <div className=" lg:block hidden absolute w-[770.33px] h-[2.38px] top-[3800.88px] left-[140.67px] opacity-[40%] bg-[#E1724C] ">
          <Image src={lineImage} alt="image" />
        </div>

        <div className="w-[90.75px] h-[64.91px] top-[5450px] lg:top-[3767.49px] left-[230px] lg:left-[1100.75px] borber-[1.87px] rotate-180 absolute">

          <Image src={vec4} alt="image" />
        </div>

        <div className="w-[90.75px] z-30 h-[64.91px] top-[5450px] lg:top-[3770.49px] left-[100px] lg:left-[970.75px] borber-[1.87px] rotate-180 absolute">

          <Image src={vec3} alt="image" />
        </div>
      </div>




      <div className="lg:w-full w-[500px] h-[457px] z-20 top-[1380px]  lg:top-[1050.4px] pr-24 left-2 lg:left-[-1.81px] relative  text-[#FFDAD0]">
        <Image src={mediaImage} alt="image" />
      </div>

      <div className=" w-full h-[950.5px] top-[5600px] lg:top-[3900.44px]  bg-[#FFDAD0] absolute">

        <div className="w-[950.97px] h-[221.8px]  relative z-40 pt-16 lg:pt-24 pl-5 lg:pl-56 font-normal text-[50px] lg:text-[69.54px] leading-[75.21px] text-[#151515]">
          <p className=" ">Your Podcast <br className="lg:hidden " /> Gallery For <br className="lg:hidden " /> Inspiring Stories</p>
        </div>

        <div className="flex wrap pl-5 lg:pl-24 mt-[100px] lg:mt-[-23px] ">
          <div className="lg:w-[350px] w-[300px] h-[400px] lg:h-[350.78px] relative z-10  ">
            <Image className="object-cover h-full w-full" src={rec1} alt="image" />
          </div>

          <div className="lg:w-[236.24px]  w-[300px] h-[400px] lg:h-[149.32px] ml-5 mt-0 lg:mt-[187px] ">
            <Image className="object-cover h-full w-full" src={rec2} alt="image" />
          </div>

          <div className=" lg:block hidden w-[454.12px] h-[520.78px] z-30 ml-12 mt-[-80px]">
            <Image src={rec3} alt="image" />
          </div>
        </div>



        <div className="flex wrap pl-24 mt-[-85px]" >
          <div className="lg:block hidden w-[135.5px] h-[134.88px] ">
            <Image src={rec4} alt="image" />
          </div>

          <div className=" lg:block hidden w-[360px] h-[346.43px] ml-4">
            <Image src={rec5} alt="image" />
          </div>

          <div className="w-[407px] h-[159.37px]  font-normal text-[12px] leading-[20px] text-[#000000] mt-28 ml-[-60px] lg:ml-48">

            <p>Indulge your senses and elevate your lifestyle with our curated collection of gourmet delights and luxurious lifestyle essentials. At Gourmet, Lifestyle & More, we believe in the art of savoring life's finest moments, and we've brought together a selection that embodies the epitome of taste, style, and sophistication.</p>
            <div className="mt-5 ml-36 lg:ml-[-30px]">
              <Button title={"JOIN TODAY"} />
            </div>
          </div>
        </div>
      </div>






      <div className="  absolute w-[600.96px] h-[247.71px] top-[6650px] lg:top-[5050.51px] left-16 lg:left-[420.54px]  font-normal text-[50px] lg:text-[80px] leading-[50px] lg:leading-[77.4px] item-center text-[#151515]">
        <h2>Stay Informed, <br className="lg:hidden" /> <span className="pl-5">Stay Inspired</span></h2>
      </div>


      <div className="flex  justify-center">

        <div className="absolute w-[322.61px] h-[159.34px] top-[6800px] lg:top-[5270.23px] left-16 lg:left-[300.25px]  font-normal text-[12px] leading-5 text-[#000000]">
          <p>Subscribe for a daily blend of insights and entertainment. Dive into captivating stories, stay ahead with breaking news, and elevate your lifestyle – because informed living is empowered living</p>
        </div>

        <div className=" absolute w-[370px] lg:w-[240.76px] h-[44.87px] top-[6900px] lg:top-[5274.76px] left-10 lg:left-[650.21px] text-[#000000] bg-[#F0F0F0] ">
          <input className="  w-[200px] h-[15px] top-[3000.13px] mt-[15px] ml-5 left-[200.96px]   bg-[#F0F0F0] text-[#000000]  font-normal text-[12px] leading-[14.52px]" type="text" placeholder="Email Address" />
        </div>
        <div className="">
          <button className=" absolute w-[160px] lg:w-[99px] h-[45.12px] top-[6970px] lg:top-[5274.76px] left-32 lg:left-[910px] rounded-[1px] bg-[#000000] font-Inter font-normal text-[12px] leading-[14.52px] tracking-widest text-[#FFFFFF]">Submit</button>
        </div>
      </div>


      <Card3 />

      <div className="con w-full h-[850px] lg:h-[818.22px] top-[7220px] lg:top-[5650.39px]  bg-[#000000] absolute ">
        <div className="flex items-center justify-center flex-col  w-full h-[505.37px] bg-gradient-to-r from-[#000000] to-[#00000000]">

          <div className="absolute z-20 w-[160px] mt-[-80px] h-[96px] gap-[397.92px]  items-center justify-center flex-col">
            <div className='flex '>
              <div className='font-Poppins font-bold leading-[84.36px] text-white text-[38.04px] tracking-wide'>CL</div>
              <div className='font-Poppins font-bold leading-[84.36px]  text-[38.04px] tracking-wide w-[17.6px]  h-[13.58px] top-[47.11px] mt-1 mr-1 left-[60.18px] text-[#E1724C]' >9</div>
              <div className='font-Poppins font-bold leading-[84.36px] text-white text-[38.04px] tracking-wide'> UD</div>
            </div>


            <div className="w-[322.61px] h-[61px]   font-normal text-[20px] leading-5 items-center text-[#FFFFFF]">
              <p>062 791 31 51</p>
              <p className="text-[12px] ml-2">email@domain.com  </p>
              <p className="text-[12px] ml-[-5px]"> locations Al 17, 4663 Dubai</p>
            </div>

            <div className="w-[631.96px] h-[247.71px] ml-[-25px] lg:ml-[-90px] mt-7  font-normal text-[50px] lg:text-[70px] leading-[77.4px] items-center text-[#FFFFFF]">
              <p className="pl-[-40px] lg:pl-0">Nourishing </p>
              <p className=" ml-[-70px]">Minds, Inspiring </p>
              <p className=" lg:ml-[100px]  ml-11"> Lives</p>
            </div>

            <div className="w-[767.33px] h-[2.38px] opacity-[40%] bg-[#BFBFBF] text-[#BFBFBF] ml-[-300px] mt-11">
              <hr />
            </div>

            <div className="w-[496.px] h-[17px] mt-16 ">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-[50px]">
                <div className=" hover:font-bold cursor-pointer hover:underline w-[102px] h-[17px]  font-normal text-[14px] leading-[16.94px] tracking-widest text-[#FFFFFF]">ABOUT</div>
                <div className=" hover:font-bold cursor-pointer hover:underline w-[102px] h-[17px]  font-normal text-[14px] leading-[16.94px] tracking-widest text-[#FFFFFF]">FOOD</div>
                <div className=" hover:font-bold cursor-pointer hover:underline w-[102px] h-[17px]  font-normal text-[14px] leading-[16.94px] tracking-widest text-[#FFFFFF]">BEVERAGES</div>
                <div className=" hover:font-bold cursor-pointer hover:underline w-[102px] h-[17px]  font-normal text-[14px] leading-[16.94px] tracking-widest text-[#FFFFFF]">LIFESTYLE</div>

              </div>

            </div>


          </div>



        </div>

      </div>

    </>
  );
}

