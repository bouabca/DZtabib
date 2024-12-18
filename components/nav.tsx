"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
      

  const tabs = ["Notification", "Apoitments", "Historique", "Profile"];
    const pathname = usePathname();
    

    return (  
        <>
           {tabs.map((tab) => {

            const isActive = pathname.includes(tab.toLowerCase());

            return (  
            <Link key={tab} href={`/pages/dashDoc/${tab.toLowerCase()}`} passHref className='w-[90%] '>
                <div
                className={`text-[16px] lg:text-[24px]   rounded-[12px] p-[7px] px-[25px] w-[320px]  md:w-[100%] h-auto  cursor-pointer transition-all duration-300 ${
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
        </>
     
    );
};

export default Nav;
