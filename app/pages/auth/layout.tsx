import React from 'react';
import './style.css'

import Image from "next/image";
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body>
        <div className="w-full h-full flex flex-row ">
        <div className="left flex justify-center flex-col items-center ">
          
            <div className='text-white text-[40px] font-bold text-center '>Social media shared today,</div>
            <div className='text-white text-[40px] font-bold text-center '> tomorrow or by location</div>
            <Image
            src="/webp/betterwomen.webp"
            height={600}
            width={600}
            alt="betterwomen"
            className="mx-[5%]"
            />
        </div>
        <div className='w-full pad  h-full flex-col p flex justify-start items-start'>

<a   href='/' className="gap-2 mr-auto flex justify-center items-center text-[30px] font-bold"> 
     <Image 
   
       src="/svg/logo.svg" 
       alt="logo" 
       width={60} 
       height={60} 
       priority // Ensures it loads faster (above-the-fold)
     />
           <Image 
   
   src="/png/tabib.png" 
   alt="logo" 
   width={160} 
   height={160} 
   priority // Ensures it loads faster (above-the-fold)
 />

</a >

{children}

</div>
     
        </div>
      
      
     
      </body>
    </html>
  );
}
