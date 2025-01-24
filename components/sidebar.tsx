"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Nav from "./nav";

interface DashboardLayoutProps {
  children: React.ReactNode;
  tabs?: string[];
  links?: string[];
  imageSrc?: string;
  altText?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  tabs = ["search", "notification", "chat", "appointments", "profile"],
 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavClick = () => {
    if (window.innerWidth < 768) {  // Mobile breakpoint
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded-md"
      >
        {isSidebarOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar Section */}
      <div className={`
        fixed inset-y-0 left-0 transform 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 
        w-64 md:w-1/5 
        bg-slate-50 
        transition-transform duration-300 ease-in-out 
        z-40 
        flex flex-col 
        overflow-y-auto
      `}>
        {/* Logo */}
        <div className="flex justify-between items-center p-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/svg/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="h-12 w-12 object-contain"
              priority
            />
            <Image
              src="/png/tabib.png"
              alt="logo"
              width={140}
              height={140}
              className="h-12 object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation Tabs */}
        <nav onClick={handleNavClick}>
          <Nav tabs={tabs} />
        </nav>

        {/* Footer Links */}
        <div className="p-4 mt-auto border-t space-y-2">
          {["Terms & Conditions", "Support"].map((item) => (
            <div 
              key={item} 
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={handleNavClick}
            >
              {item}
            </div>
          ))}
          <div 
            className="cursor-pointer hover:bg-gray-100 p-2 rounded text-red-500"
            onClick={handleNavClick}
          >
            Log out
          </div>
        </div>
      </div>

      {/* Main Dashboard Section */}
      <main className="flex-grow md:w-4/5 bg-[#F5F5F6] overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b h-20 flex items-center px-4 md:px-8">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
            <h2 className="text-xl text-blue-500">Patient</h2>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-4 md:p-8 overflow-y-auto h-[calc(100vh-5rem)]">
          {children}
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden fixed inset-0 bg-black opacity-50 z-30"
        />
      )}
    </div>
  );
};

export default DashboardLayout;