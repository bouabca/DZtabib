"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {  Search, Bell, MessageCircle, Calendar, User ,History } from 'lucide-react';

interface NavProps {
  tabs: string[];
}

const Nav: React.FC<NavProps> = ({ tabs }) => {
  const pathname = usePathname();

  const iconMap = {
 
    search: <Search className="w-5 h-5" />,
    notification: <Bell className="w-5 h-5" />,
    chat: <MessageCircle className="w-5 h-5" />,
    appointments: <Calendar className="w-5 h-5" />,
    profile: <User className="w-5 h-5" />,
    historique: <History className="w-5 h-5" />, // Add this line
  };

  return (
    <div className="p-2 mt-auto space-y-2">
      {tabs.map((tab) => (
        <div 
          key={tab} 
           className={`
            cursor-pointer  p-2 px-4 rounded-[15px] transition-all ease-in-out duration-300 text-black 
              ${pathname === `/pages/dashDoc/${tab}` || pathname === `/pages/dashPat/${tab}` ? '  bg-blue-500 text-white' : 'hover:bg-gray-100'}
            `}
        >
          <Link 
            href={`/${tab}`}
            className={`
              flex items-center gap-2 
             
            `}
          >
            {iconMap[tab as keyof typeof iconMap]}
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Nav;