
import Image from "next/image";
import Nav from "../../../components/nav"
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tabs = ["Search","notification", "appointments", "profile"];
  return (
    <html  lang="en">
      <body  >
        <div className="w-full h-full overflow-y-scroll overflow-x-hidden   flex lg:flex-row flex-col">
          {/* Sidebar Section */}
          <div className="w-screen  lg:text-[24px] lg:w-[20%] overflow-x-visible   lg:overflow-hidden lg:overflow-y-scroll flex flex-col   lg:gap-4 lg:items-center   py-[20px] bg-slate-50 sidebar">
            {/* Logo */}
          

            <Link href={"/"}  className="gap-2 mr-auto flex justify-center items-center text-[30px] font-bold"> 
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
          
        </Link>href={"/"}

    
         

            {/* Navigation Tabs */}
            <div className="flex flex-row  lg:flex-col overflow-x-scroll overflow-y-hidden lg:overflow-visible justify-start items-center w-screen lg:h-min h-min lg:w-[95%]  lg:gap-3 ">
           <Nav tabs={tabs}></Nav>
            </div>
           

            {/* Footer Links */}
            <div className="hidden lg:flex  mt-auto flex-row lg:flex-col overflow-x-scroll lg:overflow-visible justify-start items-center w-screen h-[120px] lg:h-min lg:w-[95%] lg:gap-3 ">
              <div className=" mr-auto  w-[100%]  rounded-[12px] p-[7px] px-[25px] cursor-pointer transition-all duration-300">
                Terms & Conditions
              </div>
              <div className=" mr-auto  w-[90%]   rounded-[12px] p-[7px] px-[25px] cursor-pointer transition-all duration-300">
                Support
              </div>
              <div className=" mr-auto   w-[90%]  rounded-[12px] mb-[2%] text-[#D50C0C] p-[7px] px-[25px] cursor-pointer transition-all duration-300">
                Log out
              </div>
            </div>
          </div>

          {/* Main Dashboard Section */}
          <div className=" w-screen lg:w-[80%]  lg:h-full bg-[#F5F5F6] flex flex-col justify-center items-center">
            {/* Top Search Bar */}
            <div className="h-[80px] w-full bg-white border flex items-center justify-start ">
              <div className="flex px-8 flex-row-reverse justify-center w-full  lg:flex-col lg:gap-0 text-start lg:justify-start  items:center gap-4 lg:items-start">
                 <div className="text-[34px] lg:text-[24px] font-bold">Dashboard</div>
                 <div  className="text-[34px]  lg:text-[20px] font-bold text-blue-500" >Doctor</div>
                 </div>
          
            </div>

            {/* Dynamic Content */}
            <div className=" w-[100%] overflow-scroll  top-0  h-auto lg:h-screen">

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
