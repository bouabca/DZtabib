"use client";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const tabs = ["Notification", "Apoitments", "Historique", "Profile"];

  return (
    <html  lang="en">
      <body  >
        <div className="w-full h-full flex flex-row md:flex-col">
          {/* Sidebar Section */}
          <div className="lg:w-[400px] md:w-[30%] hidden md:flex flex-col justify-start gap-4 items-center  border px-[20px] py-[20px] bg-slate-50 sidebar">
            {/* Logo */}
            <div className="gap-2 mr-auto flex justify-center items-center text-[40px] font-bold">
              <Image src="/svg/logo.svg" alt="logo" width={60} height={60} priority />
              Boostify
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-col">
            {tabs.map((tab) => {

              const isActive = pathname.includes(tab.toLowerCase());

              return (  
                <Link key={tab} href={`/pages/dash/${tab.toLowerCase()}`} passHref>
                  <div
                    className={` rounded-[12px] p-[7px] px-[25px]  cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500 text-white scale-105"
                        : " text-black hover:scale-105 hover:bg-blue-100"
                    }`}
                  >
                    {tab}
                  </div>
                </Link>
              );
              })}
            </div>
           

            {/* Footer Links */}
            <div className="mt-auto w-[280px]">
              <div className=" rounded-[12px] p-[7px] px-[25px] cursor-pointer transition-all duration-300">
                Terms & Conditions
              </div>
              <div className=" rounded-[12px] p-[7px] px-[25px] cursor-pointer transition-all duration-300">
                Support
              </div>
              <div className=" rounded-[12px] mb-[2%] text-[#D50C0C] p-[7px] px-[25px] cursor-pointer transition-all duration-300">
                Log out
              </div>
            </div>
          </div>

          {/* Main Dashboard Section */}
          <div className="w-[100%] h-full bg-[#F5F5F6] flex flex-col justify-center items-center">
            {/* Top Search Bar */}
            <div className="h-[80px] w-full bg-white border flex items-center justify-end p-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-[300px] h-[40px] rounded-lg bg-gray-200 text-gray-600 placeholder-gray-500 px-4 focus:outline-none focus:ring-2 mr-[8%] focus:ring-gray-400"
              />
            </div>

            {/* Dynamic Content */}
            <div className="overflow-y-scroll w-[100%] h-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
