import React from 'react';

function Card() {
  let data = [
    {
      title: "Weekly",
      des: "Weekly delivery of chef-designed recipes and premium ingredients.",
      des2: "Fresh, top-quality items sourced from the best suppliers.",
      des3: "Exclusive access to seasonal and limited edition items.",
      detail: "MORE DETAILS"
    },
    {
      title: "Monthly",
      des: "Weekly delivery of chef-designed recipes and premium ingredients.",
      des2: "Fresh, top-quality items sourced from the best suppliers.",
      des3: "Exclusive access to seasonal and limited edition items."
    },
    {
      title: "Customized ",
      des: "Weekly delivery of chef-designed recipes and premium ingredients.",
      des2: "Fresh, top-quality items sourced from the best suppliers.",
      des3: "Exclusive access to seasonal and limited edition items.",
      detail: "MORE DETAILS"
    }
  ];

  return (
    <div className='flex flex-col lg:flex-row justify-center space-x-6 pt-40'>
      {data.map((item, index) => (
        <div
          key={index}
          className={` cards w-[330px] h-[430.61px] mt-5  border-2 border-[#DCB33E] bg-[#FFFFFF] flex flex-col items-center 
          ${index === 1 ? 'lg:mt-14 h-[460px]' : ''}  ${index === 0 ? 'lg:ml-0 ml-[25px]' : ''}  `}
        >
          <div className={`w-[330px] h-[30.02px] bg-[#DCB33E] top-[2115.71px] mt-2 ${index === 1 ? '' : "hidden "}`}>
            <p className='w-[112px] h-[17px] font-Inter text-[14px] font-medium leading-[16.94px] pt-1 pl-[200px] text-[#FFFFFF]  '>RECOMMENDED</p>
          </div>
          <div className={`w-[137px] h-[57px] mt-10 mb-10 font-Ginger font-normal text-[40px] leading-[57.18px] text-[#151515]  ${index === 2 ? 'w-[220px] items-center' : ""}`}>
            {item.title}
          </div>

          <div className='w-[278.73px] h-[136px] font-Inter font-normal text-[14px] leading-[16.94px] text-[#151515]'>
            <p className='mb-5 w-[250px] pl-8'>{item.des}</p>
            <p className='mb-5 w-[255px] pl-5'>{item.des2}</p>
            <p className='mb-5 w-[255px] pl-5'>{item.des3}</p>
          </div>

          <div className='mt-14 w-[218px] h-[62.51px] bg-[#E1724C]'>
            <button className='hover:font-bold w-[168px] mt-6 ml-6 h-[17px] font-Inter font-medium text-[14px] leading-[16.94px] tracking-wide text-[#FFFFFF]'>
              SUBSCRIBE NOW
            </button>
          </div>

          <div className='mt-2 w-[110px] h-[17px] font-Inter font-bold text-[14px] leading-[16.94px] text-[#000000] hover:underline cursor-pointer'>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
