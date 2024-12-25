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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState("")

  
  const filteredDoctors = doctors.filter((doctor) => {
    return (
      doctor.DoctorName?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation === "" || doctor.location?.toLowerCase() === selectedLocation.toLowerCase()) &&
      (selectedPrice === "" || doctor.price?.toLowerCase() === selectedPrice.toLowerCase()) &&
      (selectedRating === "" || doctor.rate?.toString() === selectedRating)
    );
  });

  return (
    <div>
      <div className="flex items-center my-4 justify-between flex-col md:flex-row  gap-4">
{/*  */}
      <div className="relative w-full md:w-fit">
        
          <input
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)} 
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Search Using username  ..... " 
          />
<FaSearch  size={60} color="black" className="absolute -inset-y-1 end-0 grid place-content-center px-4"/>

        </div>
          {/* rating */}
  <div className="flex-col w-3/4 md:w-fit md:flex-row flex relative ">
  <FaGratipay size={35} color="red" className="absolute  top-2 left-2 grid place-content-center px-2" />
  <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
  className="mt-1.5 w-full py-2 px-8  ml-2   rounded-lg border-gray-300 text-gray-700 sm:text-sm"
  >
     <option value="">Rating</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
  </select>
  </div>
  {/* price  */}
  <div className="flex-col md:flex-row    w-3/4 md:w-fit   flex relative    ">
  <MdPriceChange size={35} color="orange" className="absolute  top-2 left-2 grid place-content-center px-2" />
  <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}

  className="mt-1.5 w-full py-2 px-8  ml-2   rounded-lg border-gray-300 text-gray-700 sm:text-sm"
  >
       <option value="">Price</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
  </select>
  </div>
  {/*location   */}
  <div className="flex-col md:flex-row flex  w-3/4 md:w-fit relative    ">
  <FaLocationDot  size={35} color="green" className="absolute  top-2 left-2 grid place-content-center px-2" />
  <select
  value={selectedLocation}
  onChange={(e) => setSelectedLocation(e.target.value)}
  className="mt-1.5 w-full py-2 px-8  ml-2   rounded-lg border-gray-300 text-gray-700 sm:text-sm"
  >
      <option value="">Location</option>
            <option value="batna">Batna</option>
            <option value="algiers">Algiers</option>
            <option value="oran">Oran</option>
  </select>
  </div>
      </div>
{/* Doctors  */}
<h1 className="text-3xl font-bold">Doctors : </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 lg:gap-8">
      {filteredDoctors.map((doctor, index) => (
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
