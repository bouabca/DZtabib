import React from "react";

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
    
  <div className="w-[99.9%] text-[24px] flex flex-row justify-between items-center border-b-2 border-solid border-slate-400 px-8  mx-auto py-4">
    <div className="w-[150px] text-start  border-solid border-2 border-black">{date}</div>
    <div className="w-[200px] text-start  border-solid border-2 border-black">{patient}</div>
    <div className="w-[180px] text-start  border-solid border-2 border-black">{type}</div>
    <div className="w-[250px] text-start  border-solid border-2 border-black">{number}</div>
    <div className="w-[250px] text-start  border-solid border-2 border-black">{email}</div>
    <div className="w-[200px] text-start  border-solid border-2 border-black">
      <button className="bg-gray-400 text-white px-4 py-2 rounded">Start Meet</button>
    </div>
  </div>
  
 
);




  const AppointmentList = () => {
    // Example data array
    const appointments = [
      { date: "2024-12-18", patient: "John Doe", type: "Checkup", number: "001", email: "john@example.com" },
      { date: "2024-12-19", patient: "Jane Smith", type: "Consultation", number: "002", email: "jane@example.com" },
      { date: "2024-12-20", patient: "Alice Brown", type: "Surgery", number: "003", email: "alice@example.com" },
      { date: "2024-12-21", patient: "Bob Johnson", type: "Follow-up", number: "004", email: "bob@example.com" },
      // Add more entries as needed
    ];
  
    return (
      <>
 
        {appointments.map((appointment, index) => (
          <AppointmentRow
            key={index}
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
  