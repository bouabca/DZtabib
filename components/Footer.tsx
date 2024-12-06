import React from 'react';
import Image from "next/image";

function Footer() {
  return (
    <div className="relative">
      {/* Image */}
 
      <Image
        src={"/webp/heal.webp"}
        height={550}
        width={550}
        alt="heal"
        className="rounded-full mb-[-27%] ml-auto mr-[7%]   relative z-10"
      />
   <div className='h-[650px] w-[650px] rounded-full mb-[-32%] bottom-[100px]   ml-auto mr-[5%]  bg-[#F2F9FF] relative z-1'>
        
        </div>
        <div className='h-[600px] w-[600px] rounded-full mb-[-32%] bottom-[100px]   ml-auto mr-[6%]  bg-[#E6F3FF] relative z-1'>
        
        </div>
     
      {/* SVG */}
      <svg
        viewBox="0 0 1442 638"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-0 w-full h-auto mt-[150px]"
      >
        <path
          d="M1 637H1441V61.0175C1201 21.0058 961 1 721 1C481 1 241 21.0058 1 61.0175V637Z"
          fill="#0081FE"
          stroke="#0081FE"
        />
      </svg>
    </div>
  );
}

export default Footer;
