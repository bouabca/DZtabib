'use client'
import React, { useState } from "react";
import RoleSelection from '../../../components/authpageComp/RoleSelection';
import InputFields from '../../../components/authpageComp/InputFields';
import Buttons from '../../../components/authpageComp/Buttons';

export default function Auth() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
    userType: "", // Either "doctor" or "patient"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserTypeChange = (type: string) => {
    setFormData({ ...formData, userType: type });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch request with GET method
    try {
      const response = await fetch(
        `/api/create-account?firstName=${formData.firstName}&lastName=${formData.lastName}&email=${formData.email}&birthDate=${formData.birthDate}&password=${formData.password}&userType=${formData.userType}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mx-auto w-full  flex  flex-col justify-center items-center py-10 px-4 bg-gray-100 min-h-screen">
      <div className="text-[40px] font-bold text-gray-800 mb-4">Create Account</div>
      <div className="text-[20px] text-gray-600 mb-8">
        ARE YOU A PATIENT OR A DOCTOR?
      </div>

      {/* Role Selection */}
      <RoleSelection 
        userType={formData.userType} 
        handleUserTypeChange={handleUserTypeChange}
      />

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6"
      >
        {/* Input Fields */}
        <InputFields 
          formData={formData} 
          handleInputChange={handleInputChange}
        />

        {/* Buttons */}
        <Buttons />
      </form>
    </div>
  );
}
