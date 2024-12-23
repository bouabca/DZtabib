// /components/NotificationItem.tsx
import React from "react";

interface NotificationItemProps {
  imgSrc: any;
  message: any;
  date: any;
  viewed: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ imgSrc, message, date, viewed }) => {
  return (
    <div className={`h-[84px] flex flex-row items-center   gap-4 p-4  ${viewed ? 'text-gray-400 bg-opacity-30  ' : 'text-[18px] font-bold  bg-opacity-80 '} rounded-[20px]  bg-white  cursor-pointer hover:bg-[#18A0FB] hover:bg-opacity-80 hover:text-white transition-colors duration-300 ease-in-out `}
    >
     <img
        src={imgSrc}
        alt="Notification"
        className="w-12 h-12 rounded-full"
      />
      <div className="flex flex-col flex-grow">
        <p className=" font-medium">{message}</p>
        <p className=" ">Date: {date}</p>
      </div>
      <div className={`w-4 h-4 rounded-full ${viewed ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
    </div>
  );
};

export default NotificationItem;
