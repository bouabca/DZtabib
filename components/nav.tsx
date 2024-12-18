"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  tabs?: string[]; // `tabs` is optional now
}

const Nav: React.FC<NavProps> = ({ tabs = [] }) => { // Default value for tabs is an empty array
  const pathname = usePathname();

  // Get the base path (e.g., /pages/dashPat)
  const basePath = pathname.split('/').slice(0, 3).join('/');

  return (
    <>
      {tabs.map((tab) => {
        const isActive = pathname.includes(tab.toLowerCase());

        return (
          <Link 
            key={tab} 
            href={`${basePath}/${tab.toLowerCase()}`} // Combining base path with tab
            passHref
            className='w-[90%]'
          >
            <div
              className={`text-[16px] lg:text-[24px] rounded-[12px] p-[7px] px-[25px] w-[320px] md:w-[100%] h-auto cursor-pointer transition-all duration-300 ${
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
