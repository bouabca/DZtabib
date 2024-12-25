
import Image from "next/image";
import Nav from "../../../components/nav"
import Link from "next/link";
import DropdownImageMenu from "@/components/Hamb";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tabs = ["search","notification", "appointments", "profile"];

  const links = ["notification", "appointments", "search", "profile"]; // Menu links
  const imageSrc = "/svg/hamp.svg"; // Path to your menu image
  const altText = "Menu Icon";
  return (
    <html  lang="en">
      <body  >
        <div className="w-full h-full overflow-y-scroll overflow-x-hidden   flex lg:flex-row flex-col">
          {/* Sidebar Section */}
          <div className="w-screen  lg:text-[24px] lg:w-[20%] overflow-x-visible   lg:overflow-hidden lg:overflow-y-scroll flex flex-col   lg:gap-4 lg:items-center    bg-slate-50 sidebar">
            {/* Logo */}
          

            <div className="w-full h-[100px] flex justify-start px-2 lg:px-10  w-max-[80%] ">
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
              <div className="md:hidden  flex ml-auto m-4 z-40">   <DropdownImageMenu links={links} imageSrc={imageSrc} altText={altText} />
              </div>
         
            </div>

    
         

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
            <div className=" w-[95%] overflow-scroll  top-0  h-auto lg:h-screen">

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
