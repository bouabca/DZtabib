"use client"
// /pages/dash/notification.tsx
import React from "react";
import DoctorCard from "../../../../components/patientDash/DoctorCard"
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaGratipay } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";



const Search = () => {
  const [doctors, setDoctors] = useState([
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna el zouhour",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 4,
      "image": "/png/doc.png",
      "DoctorName": "Younes laidani",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna el zouhour",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 4,
      "image": "/png/doc.png",
      "DoctorName": "Younes laidani",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna el zouhour",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 4,
      "image": "/png/doc.png",
      "DoctorName": "Younes laidani",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    },
    {
      "rate": 5,
      "image": "/png/doc.png",
      "DoctorName": "Younes Djouza",
      "location": "Batna",
      "speciality": "Catalogue",
      "date": "2004-04-04"
    }
  ]);
 const hadelfilter = (e) => {
  setDoctors(doctors.filter((doctor) => doctor.DoctorName === e.target.value));
 }

  return (
    <div>
      <div className="flex items-center my-4 justify-between gap-4">

      <div className="relative w-fit">
        
          <input
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Search Using username  ..... " 
          />
<FaSearch  size={60} color="black" className="absolute -inset-y-1 end-0 grid place-content-center px-4"/>

        </div>
          {/* rating */}
  <div className="flex-col md:flex-row flex relative    ">
  <FaGratipay size={35} color="red" className="absolute  top-2 left-2 grid place-content-center px-2" />
  <select
  className="mt-1.5 w-full py-2 px-8  ml-2   rounded-lg border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">rating</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
  </div>
  {/* price  */}
  <div className="flex-col md:flex-row flex relative    ">
  <MdPriceChange size={35} color="orange" className="absolute  top-2 left-2 grid place-content-center px-2" />
  <select
  className="mt-1.5 w-full py-2 px-8  ml-2   rounded-lg border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Location</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
  </div>
  {/*location   */}
  <div className="flex-col md:flex-row flex relative    ">
  <FaLocationDot  size={35} color="green" className="absolute  top-2 left-2 grid place-content-center px-2" />
  <select
  className="mt-1.5 w-full py-2 px-8  ml-2   rounded-lg border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Location</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
  </div>
      </div>
{/* Doctors  */}
<h1 className="text-3xl font-bold">Doctors : </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 lg:gap-8">
      {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            rate={doctor.rate}
            image={doctor.image}
            DoctorName={doctor.DoctorName}
            location={doctor.location}
            speciality={doctor.speciality}
            date={doctor.date}
          />
        ))}
      
 

     </div>
    </div>
  );
};

export default Search;
