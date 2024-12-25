import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsBookmarkFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { LuCalendarRange } from "react-icons/lu";
interface DoctorCardProps {
  rate: number;
  image: string;
  DoctorName: string;
  location: string;
  speciality: string;
  date: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ rate, image, DoctorName, location, speciality, date }) => {
  return (
    <div className='border border-primary  rounded-2xl gap-4 relative    bg-white flex flex-col justify-center items-center'>
      <Image src={image} alt={DoctorName} className='rounded-full w-32 h-32 ' width={96} height={96} />
      <div className='text-center mt-4'>
        <h2 className='text-xl font-bold text-[#5A5389]'>Mr {DoctorName}</h2>
        <p className='text-gray-400'>{location}</p>
      <div className='bg-[#ECEFFF] flex items-center my-2 justify-center rounded-full '>
       <h1 className='text-primary font-bold'> {speciality}</h1>
      </div>
        <div className="absolute -left-1  top-8 z-20 flex items-center   space-x-2">
          <BsBookmarkFill  color='#FFF3EF' size={80} className="transform  border-none  relative -rotate-90 " />
          <span className="text-[#FE7C42] absolute right-4  p-2 text-xl ">{rate}</span>
          <FaStar  className='absolute ' color='#FE7C42 ' size={25}/> 
        </div>

       
      </div>
      <div className='bg-gray-100  border-t rounded-b-2xl border-primary w-full'>

        <div className='flex justify-between  '>
          <div className='flex items-center justify-center ml-3   '>
          <LuCalendarRange color='#969699' />
          <h1 className='text-[#969699] text-center '>{date}</h1>  
          </div>
         <Link href='/dashPat/doctorProfile ' className='bg-primary  rounded-br-2xl  w-1/2 text-white  text-center py-1 px-4'>Reserver</Link>
        </div>
</div>
    </div>
  );
};

export default DoctorCard;