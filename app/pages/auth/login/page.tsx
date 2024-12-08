'use client';
import React, { useState } from 'react';
import LoginInputFields from '../../../../components/authpageComp/logininputFields';
import Buttons from '../../../../components/authpageComp/loginButton';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;

    // Check if both fields are filled
    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }

    setError('');

    // Fetch request with POST method to handle login
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log('Response from server:', data);

      if (data.success) {
        // Handle successful login (e.g., redirect to another page)
      } else {
        // Handle error (e.g., show error message)
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="mx-auto w-full flex flex-col justify-center items-center py-10 px-4 ">
      <div className="text-[40px] font-bold text-gray-800 mb-4">Login</div>
      <div className="text-[20px] text-gray-600 mb-8">Enter your credentials</div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full  bg-white rounded-lg p-6 space-y-6"
      >
        {/* Input Fields for Login */}
        <LoginInputFields 
          formData={formData} 
          handleInputChange={handleInputChange}
        />

        {/* Error Message */}
        {error && <div className="text-red-500 text-sm">{error}</div>}

        {/* Buttons (e.g., submit button) */}
        <Buttons />
      </form>
      <div className="text-[20px] text-center text-gray-600 mt-4">
        Don't have an account?{' '}
        <a href="/pages/auth/signup" className="text-blue-500 hover:underline">
          Sign up
        </a>
      </div>
    </div>
  );
}
