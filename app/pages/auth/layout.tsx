import React from 'react';
import './style.css'


import Image from "next/image";
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body>
        <div className="w-full  text-[25px] md:text-[80px] flex h-full flex-row ">
        <div className="left flex flex-col items-center justify-center h-auto  mx-auto px-4 md:px-8">
  <div className="text-white font-bold text-center  mb-4">
    Social media shared today,
  </div>
  <div className="text-white font-bold text-center  mb-6">
    tomorrow or by location
  </div>
  <Image
    src="/webp/betterwomen.webp"
    height={600}
    width={600}
    alt="betterwomen"
    className="w-[80%] md:w-[60%] lg:w-[50%] h-auto mx-auto"
  />
</div>

          <div className='w-full pad   flex-col sac   flex justify-start items-start'>

            <a   href='/' className="gap-2 mr-auto flex justify-center items-center text-[30px] font-bold"> 
                <Image 
              
                  src="/svg/logo.svg" 
                  alt="logo" 
                  width={60} 
                  height={60} 
                  priority 
                />
                      <Image 
              
              src="/png/tabib.png" 
              alt="logo" 
              width={160} 
              height={160} 
              priority 
            />

            </a >


             {children}

      


            </div>

     
        </div>
      
      
     
      </body>
    </html>
  );
}
