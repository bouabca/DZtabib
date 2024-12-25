"use client";
import dynamic from "next/dynamic"; // Import dynamic for map component
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";




// Dynamically import the map to avoid hydration issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });
import { useMapEvents } from 'react-leaflet'; 
import { LeafletMouseEvent } from 'leaflet';

const Profile: React.FC = () => {
  // State to handle inputs
  const [name, setName] = useState<string>("");
  const [specialty, setSpecialty] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [certificate, setCertificate] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);

  // Predefined list of locations (e.g., cities or regions)
  const locations = [
    { name: "Bejaia", lat: 36.7533, lng: 5.0667 },  
    { name: "Alger", lat: 36.7538, lng: 3.0588 },        // Algiers
    { name: "Oran", lat: 35.6992, lng: -0.6333 },        // Oran
    { name: "Constantine", lat: 36.3650, lng: 6.6149 },   // Constantine
    { name: "Annaba", lat: 36.8663, lng: 7.7639 },        // Annaba
    { name: "Tlemcen", lat: 34.8885, lng: -1.3165 },      // Tlemcen
    { name: "Blida", lat: 36.4800, lng: 2.8293 },        // Blida
    { name: "Batna", lat: 35.5612, lng: 6.1782 },         // Batna
    { name: "Sétif", lat: 36.1833, lng: 5.4167 },         // Sétif
    { name: "Béjaïa", lat: 36.7533, lng: 5.0667 },        // Béjaïa
    { name: "Chlef", lat: 36.1667, lng: 1.3333 }, 
  
  ];

  const specialties = [
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "Orthopedic Surgeon",
    "Neurologist",
    "Psychiatrist",
    "Gynecologist",
    "General Practitioner",
    "Dentist",
    "Ophthalmologist"
  ];

  const comments = [
    {
      id: 1,
      profilePic: '/png/doc.png', // Replace with the actual image URL
      username: 'John Doe',
      rating: 4,
      comment: 'This is an amazing product! Highly recommended.',
    },
    {
      id: 2,
      profilePic: '/png/doc.png', // Replace with the actual image URL
      username: 'Jane Smith',
      rating: 5,
      comment: 'Absolutely love this! Will buy again.',
    },
    {
      id: 3,
      profilePic: '/png/doc.png', // Replace with the actual image URL
      username: 'Mike Johnson',
      rating: 3,
      comment: 'It s okay, but I ve seen better.',
    },
  ];

  const selectedLocation = locations.find((loc) => loc.name === location);

  useEffect(() => {
    if (selectedLocation) {
      setLat(selectedLocation.lat);
      setLng(selectedLocation.lng);
    }
  }, [location]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setCertificate(selectedFile);
      previewImage(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setCertificate(droppedFile);
      previewImage(droppedFile);
    }
  };

  const previewImage = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file); // For image files
    } else {
      setImagePreview(null); // If it's not an image, reset the preview
    }
  };

  // Function to handle map events using the hookimport { MouseEvent as LeafletMouseEvent } from 'leaflet'; /
  const MapClickHandler = () => {
    useMapEvents({
      click(e: LeafletMouseEvent) { // Use the specific LeafletMouseEvent type for the event
        const { lat, lng } = e.latlng; // Access latlng directly from the event
        setLat(lat);
        setLng(lng);
      },
    });
  
    return null; // This component doesn't need to render anything itself
  };

   

  return (
    <div className="w-full flex flex-col h-full bg-[#18A0FB]">
      <div className="flex flex-row justify-between items-center w-[80%] lg:w-[500px] m-[20px] mx-auto">
        <div className="flex flex-col justify-center items-center text-white">
          <Image src="/svg/star.svg" width={80} height={80} className="m-[20px] mx-auto" alt="doc" />
          <div className="text-[20px] font-bold">150 +</div>
          <div className="text-[16px]">Patient</div>
        </div>

        <div className="flex flex-col justify-center items-center text-white">
          <Image src="/svg/crown.svg" width={80} height={80} className="m-[20px] mx-auto" alt="doc" />
          <div className="text-[20px] font-bold">150 +</div>
          <div className="text-[16px]">Patient</div>
        </div>

        <div className="flex flex-col justify-center items-center text-white">
          <Image src="/svg/heart.svg" width={80} height={80} className="m-[20px] mx-auto" alt="doc" />
          <div className="text-[20px] font-bold">150 +</div>
          <div className="text-[16px]">Patient</div>
        </div>
      </div>
      <Image src="/png/doc.png" width={200} height={200} className="m-[20px] mx-auto" alt="doc" />

      <div className=" lg:h-[55%] w-full justify-center items-center flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row bg-[#F5F5F6] px-12 p-4 rounded-t-[30px] mt-auto">
        <div className="w-full lg:w-[30%]   h-full flex-col justify-center items-center">
          {/* Location Select */}
          <div className="w-[90%] flex flex-col justify-start items-start mx-auto h-full">
            <label htmlFor="location" className="text-black font-semibold">Location</label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-white border border-light-gray rounded-[5px]  p-4 text-black focus:outline-none"
            >
              <option value="">Select Location</option>
              {locations.map((loc) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name}
                </option>
              ))}
            </select>
            {selectedLocation && (
              <div className="w-full h-[82%]">
                <MapContainer
                  key={`${lat},${lng}`} // Use lat and lng to generate a unique key
                  center={[lat ?? 0, lng ?? 0]}
                  zoom={12}
                  className="w-full h-full"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[lat ?? 0, lng ?? 0]}>
                   
                    <Popup>{selectedLocation.name}</Popup>
                  </Marker>
                  <MapClickHandler /> {/* Add map click handler here */}
                </MapContainer>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-[50%] mx-auto  flex-col justify-center h-[500px] lg:h-full  items-center">
          <div className="w-[90%] mx-auto">
            {/* Name input */}
            <label htmlFor="name" className="text-black font-semibold">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-white border border-light-gray rounded-[5px] p-4 text-black focus:outline-none"
            />
          </div>

      
          <div className="w-[90%] mx-auto">
            {/* Specialty select */}
            <label htmlFor="specialty" className="text-black font-semibold">Specialty</label>
            <select
              id="specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full bg-white border border-light-gray rounded-[5px] p-4 text-black focus:outline-none"
            >
              <option value="">Select Specialty</option>
              {specialties.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          <div className="w-[90%] mx-auto">
            {/* Description about doctor input */}
            <label htmlFor="description" className="text-black font-semibold">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write about the doctor"
              className="w-full bg-white border border-light-gray rounded-[5px] p-4 text-black focus:outline-none h-[200px]"
            />
          </div>
        </div>

        <div className="w-full  lg:w-[25%] overflow-hidden h-[1000px] lg:h-full flex flex-col justify-start items-start border-2 border-dashed border-gray-400 rounded-lg">
          {!certificate ? (
            <div
              className="w-[90%] mx-auto my-auto h-[150px] flex flex-col justify-center items-center border-2 border-dashed border-gray-400 rounded-lg bg-white cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <input
                id="certificate"
                type="file"
                onChange={handleFileChange}
                accept=".jpg,.png,.jpeg"
                className="hidden"
              />
              <span className="text-gray-500 text-lg">Drag & Drop your certificate here</span>
              <span className="text-gray-400 text-sm">or</span>
              <button className="text-blue-500 text-sm">Browse Files</button>
            </div>
          ) : (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="overflow-hidden flex flex-col justify-start items-start w-full h-full bg-black bg-cover bg-center"
              style={{ backgroundImage: `url(${imagePreview || URL.createObjectURL(certificate)})` }}
            >
            
            </div>
          )}
        </div>
        
      </div>
      <div className="w-full h-auto px-4 bg-[#F5F5F6]"> 
      {comments.map(({ id, profilePic, username, rating, comment }) => (
        <div
          key={id}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
            padding: '10px',
   
            borderRadius: '8px',
            background: '#f9f9f9',
          }}
        >
          <Image
          height={100}
          width={100}
            src={profilePic}
            alt={`${username}'s profile`}
            className="mx-2"
          />
          <div>
            <div style={{ fontWeight: 'bold' }}>{username}</div>
            <div style={{ color: '#ffd700'  ,fontSize: '25px'}}>
              {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
            </div>
            <div style={{ fontSize: '14px', color: '#555' }}>{comment}</div>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Profile;
