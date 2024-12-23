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
    { name: "New York", lat: 40.7128, lng: -74.0060 },
    { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    { name: "Chicago", lat: 41.8781, lng: -87.6298 },
    { name: "Houston", lat: 29.7604, lng: -95.3698 },
    { name: "Phoenix", lat: 33.4484, lng: -112.0740 },
    { name: "Philadelphia", lat: 39.9526, lng: -75.1652 },
    { name: "San Antonio", lat: 29.4241, lng: -98.4936 },
    { name: "San Diego", lat: 32.7157, lng: -117.1611 },
    { name: "Dallas", lat: 32.7767, lng: -96.7970 },
    { name: "San Jose", lat: 37.3382, lng: -121.8863 },
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
      <div className="flex flex-row justify-between items-center w-[80%] md:w-[500px] m-[20px] mx-auto">
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

      <div className="h-[55%] w-full justify-center items-center flex flex-col lg:flex-row bg-[#F5F5F6] px-12 p-4 rounded-t-[30px] mt-auto">
        <div className="w-[30%] p-4 bg-slate-200 flex-col justify-center items-center">
          {/* Location Select */}
          <div className="w-[90%] mx-auto">
            <label htmlFor="location" className="text-black font-semibold">Location</label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-white border border-light-gray rounded-[5px] p-4 text-black focus:outline-none"
            >
              <option value="">Select Location</option>
              {locations.map((loc) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name}
                </option>
              ))}
            </select>
            {selectedLocation && (
              <div className="w-full h-[300px] mt-6">
                <MapContainer
                  key={`${lat},${lng}`} // Use lat and lng to generate a unique key
                  center={[lat ?? 0, lng ?? 0]}
                  zoom={12}
                  style={{ width: "100%", height: "100%" }}
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

        <div className="w-[50%] bg-slate-200 mx-auto p-4 flex-col justify-center items-center">
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
            {/* Specialty input */}
            <label htmlFor="specialty" className="text-black font-semibold">Specialty</label>
            <input
              id="specialty"
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              placeholder="Enter specialty"
              className="w-full bg-white border border-light-gray rounded-[5px] p-4 text-black focus:outline-none"
            />
          </div>

          <div className="w-[90%] mx-auto">
            {/* Description about doctor input */}
            <label htmlFor="description" className="text-black font-semibold">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write about the doctor"
              className="w-full bg-white border border-light-gray rounded-[5px] p-4 text-black focus:outline-none h-[150px]"
            />
          </div>
        </div>

        <div className="w-[25%] overflow-hidden bg-slate-200 h-full flex flex-col justify-start items-start border-2 border-dashed border-gray-400 rounded-lg">
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
              <div className="bg-black bg-opacity-50 w-full h-full flex justify-center items-center text-white">
                <span>Certificate Image</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
