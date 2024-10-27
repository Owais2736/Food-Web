import React from 'react';

export default function Button(props) {
  return (
    <button className="hover:font-bold absolute w-[111.07px] h-[46.91px] text-center text-[12px] tracking-wider border-none rounded-[60px] overflow-hidden">
      {props.title}

      
      <div className="absolute top-0 left-0 h-full w-full">
        
        <div className="absolute top-0 left-0 h-full w-[2px] bg-[#E1724C] rounded-l-[60px]" />
        
        <div className="absolute top-0 left-0 w-[50%] h-[2px] bg-[#E1724C] rounded-tl-[60px]" />
        
        
        <div className="absolute bottom-0 left-0 w-[75%] h-[2px] bg-[#E1724C] rounded-bl-[60px]" />
      </div>
    </button>
  );
}
