"use client"
import React, { useState } from "react";
import AppointmentList from "../../../../components/docdashComp/list";
import Dashhead from "../../../../components/docdashComp/dashHead"
const istorique = () => {
  const [search, setSearch] = useState(""); // State for search input
  const appointments = [
    {id:"0", date: "2024-12-18", patient: "John Doe", type: "Checkup", number: "001", email: "john@example.com" },
    { id:"1", date: "2024-12-19", patient: "Jane Smith", type: "Consultation", number: "002", email: "jane@example.com" },
    { id:"2", date: "2024-12-20", patient: "Alice Brown", type: "Surgery", number: "003", email: "alice@example.com" },
    { id:"3", date: "2024-12-21", patient: "Bob Johnson", type: "Follow-up", number: "004", email: "bob@example.com" },
    // Add more entries as needed
  ];
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patient.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <>
       <input
        type="text"
        placeholder="Search..."
        className="w-[300px] h-[40px] rounded-lg m-8 bg-gray-200 text-gray-600 placeholder-gray-500 px-4 focus:outline-none focus:ring-2 mr-[8%] focus:ring-gray-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Update search input on change
      />
   
      <div className="p-4 m-4 rounded-[10px] overflow-visible  w-[1200px] md:w-[98%] mx-auto    bg-white">

          <Dashhead></Dashhead>


          <AppointmentList appointments={filteredAppointments} />

      </div>
    
   </>
  );
};

export default istorique;
