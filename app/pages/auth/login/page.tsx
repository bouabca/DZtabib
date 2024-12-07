'use client'
import React, { useState } from "react";
import LoginInputFields from '../../../../components/authpageComp/logininputFields';
import Buttons from '../../../../components/authpageComp/loginButton';

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch request with POST method to handle login
    try {
      const response = await fetch(
        `/api/login?email=${formData.email}&password=${formData.password}`,
        {
          method: "POST", // You can use POST for login
        }
      );
      const data = await response.json();
      console.log("Response from server:", data);
      if (data.success) {
        // Handle successful login (e.g., redirect to another page)
      } else {
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mx-auto w-full flex flex-col justify-center items-center py-10 px-4 bg-gray-100 min-h-screen">
      <div className="text-[40px] font-bold text-gray-800 mb-4">Login</div>
      <div className="text-[20px] text-gray-600 mb-8">Enter your credentials</div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6"
      >
        {/* Input Fields for Login */}
        <LoginInputFields 
          formData={formData} 
          handleInputChange={handleInputChange}
        />

        {/* Buttons (e.g., submit button) */}
    <Buttons></Buttons>
      </form>
    </div>
  );
}
