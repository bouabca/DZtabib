"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  tabs: string[];
}

const Nav: React.FC<NavProps> = ({ tabs }) => {
  const pathname = usePathname();

  return (
    <div className="p-4 mt-auto  space-y-2">
      {tabs.map((tab) => (
        <div 
          key={tab} 
         className="cursor-pointer hover:bg-gray-100 p-2 rounded"
        >
          <Link 
            href={`/${tab}`}
            className={`
              block w-full 
              ${pathname === `/${tab}` ? 'text-blue-500' : ''}
            `}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Nav;