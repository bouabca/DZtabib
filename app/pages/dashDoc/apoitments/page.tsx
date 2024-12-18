// /pages/dash/notification.tsx
import React from "react";
import AppointmentList from "../../../../components/docdashComp/list"
const Apoitments = () => {
  return (
   <> 
   <div className="p-4 m-4 rounded-[10px] overflow-visible  w-[1200px] md:w-[98%] mx-auto    bg-white">
   <div className="w-[99.9%]  text-[24px] flex flex-row justify-between  px-8  items-center mx-auto bg-slate-200 py-4 ">
    <div className="w-[150px] text-start border-solid border-2 border-black">Date</div>
    <div  className="w-[200px] text-start border-solid border-2 border-black" >Patient</div>
    <div  className="w-[180px] text-start border-solid border-2 border-black" >apoitment type</div>
    <div  className="w-[250px] text-start border-solid border-2 border-black" >Numero</div>
    <div  className="w-[250px] text-start border-solid border-2 border-black" >Gmail</div>
    <div  className="w-[200px] text-start border-solid border-2 border-black" >Start meet</div>
   </div>
 
    <AppointmentList></AppointmentList>
   
  
  
  
   
   
   </div>
 
   </>
  );
};

export default Apoitments;
