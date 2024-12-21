
import Image from "next/image";
import Nav from "../../../components/nav"
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tabs = ["Search","notification", "appointments", "profile"];
  return (
    <html  lang="en">
      <body  >
        <div className="w-full h-full overflow-y-scroll overflow-x-hidden   flex md:flex-row flex-col">
          {/* Sidebar Section */}
          <div className="w-screen  lg:text-[24px] md:w-[20%] overflow-x-visible   md:overflow-hidden md:overflow-y-scroll flex flex-col   md:gap-4 md:items-center   py-[20px] bg-slate-50 sidebar">
            {/* Logo */}
          


            <div className="w-full h-[100px] flex justify-start px-2 md:px-10  w-max-[80%] bg-slate-300">
            <Link className=" gap-2   w-max-[80%]  object-contain  flex justify-center items-center text-[24px] lg:text-[30px] font-bold" href={"/"}>
            <Image
                src="/svg/logo.svg"
                alt="logo"
                className="w h-[100%] object-contain"
                width={50}
                height={50}
                priority
              />
              <Image
                src="/png/tabib.png"
                alt="logo"
                className=" h-[100%] object-contain"
                width={140}
                height={140}
                priority
              />
                 </Link>
            </div>
                 

    
         

            {/* Navigation Tabs */}
            <div className="flex flex-row  md:flex-col overflow-x-scroll overflow-y-hidden md:overflow-visible justify-start items-center w-screen md:h-min h-min md:w-[95%]  md:gap-3 ">
           <Nav tabs={tabs}></Nav>
            </div>
           

            {/* Footer Links */}
            <div className="hidden md:flex  mt-auto flex-row md:flex-col overflow-x-scroll md:overflow-visible justify-start items-center w-screen h-[120px] md:h-min md:w-[95%] md:gap-3 ">
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
          <div className=" w-screen md:w-[80%]  md:h-full bg-[#F5F5F6] flex flex-col justify-center items-center">
            {/* Top Search Bar */}
            <div className="h-[80px] w-full bg-white border flex items-center justify-start ">
              <div className="flex px-8 flex-row-reverse justify-center w-full  md:flex-col md:gap-0 text-start md:justify-start  items:center gap-4 md:items-start">
                 <div className="text-[34px] md:text-[24px] font-bold">Dashboard</div>
                 <div  className="text-[34px]  md:text-[20px] font-bold text-blue-500" >Doctor</div>
                 </div>
          
            </div>

            {/* Dynamic Content */}
            <div className=" w-[100%] overflow-scroll  top-0  h-auto md:h-screen">

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
