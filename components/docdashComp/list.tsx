import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
interface AppointmentRowProps {
  date: string;
  patient: string;
  type: string;
  number: string;
  email: string;
}

const AppointmentRow: React.FC<AppointmentRowProps> = ({
  date,
  patient,
  type,
  number,
  email,
}) => (
  <div className="w-[99.9%] text-[24px] flex flex-row justify-between items-center border-b-2 border-solid  px-8 mx-auto py-4">
    <div className="w-[150px] text-start border-solid border-2  border-black">{date}</div>
    <div className="w-[200px] text-start border-solid border-2 border-black">{patient}</div>
    <div className="w-[180px] text-start border-solid border-2 border-black">{type}</div>
    <div className="w-[250px] text-start border-solid border-2 border-black">{number}</div>
    <div className="w-[250px] text-start border-solid border-2 border-black">{email}</div>
    <div className="w-[200px] flex flex-row justify-center items-center  text-start border-solid border-2 border-black">
      <button className="bg-gray-400  text-white px-4 py-2 rounded">Start Meet</button>
      <BsThreeDotsVertical size={45} />
    </div>
  </div>
);

interface AppointmentListProps {
  appointments: {
    date: string;
    patient: string;
    type: string;
    number: string;
    email: string;
  }[];
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments }) => {
  return (
    <>
      {appointments.map((appointment, index) => (
       <div className="hover:bg-slate-200 transition-all ease-in duration-[200ms]">
   <AppointmentRow 
          key={index}
          date={appointment.date}
          patient={appointment.patient}
          type={appointment.type}
          number={appointment.number}
          email={appointment.email}
        />
       </div>
     
      ))}
    </>
  );
};

export default AppointmentList;
