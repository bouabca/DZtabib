import React from "react";
import DropdownMenu from "../docdashComp/dropdown";

interface AppointmentRowProps {
  id: string;
  date: string;
  patient: string;
  type: string;
  number: string;
  email: string;
}

const AppointmentRow: React.FC<AppointmentRowProps> = ({
  id,
  date,
  patient,
  type,
  number,
  email,
}) => {
  return (
    <div
      key={id}
      className="w-[99.9%] text-[24px] flex flex-row justify-between items-center border-b-2 border-solid px-8 mx-auto py-4 hover:bg-slate-100 hover:text-blue-500 cursor-pointer transition-all ease-in duration-[200ms]"
    >
      <div className="w-[150px] text-start border-solid border-2 border-black">{date}</div>
      <div className="w-[200px] text-start border-solid border-2 border-black">{patient}</div>
      <div className="w-[180px] text-start border-solid border-2 border-black">{type}</div>
      <div className="w-[250px] text-start border-solid border-2 border-black">{number}</div>
      <div className="w-[250px] text-start border-solid border-2 border-black">{email}</div>
      <div className="w-[200px] flex flex-row justify-center items-center text-start border-solid border-2 border-black">
        <button className="bg-gray-400 text-white px-4 py-2 rounded">Start Meet</button>
        <DropdownMenu />
      </div>
    </div>
  );
};

interface AppointmentListProps {
  appointments: {
    id: string;
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
      {appointments.map((appointment) => (
        <AppointmentRow
          key={appointment.id} // Use the unique ID as the key
          id={appointment.id}
          date={appointment.date}
          patient={appointment.patient}
          type={appointment.type}
          number={appointment.number}
          email={appointment.email}
        />
      ))}
    </>
  );
};

export default AppointmentList;
