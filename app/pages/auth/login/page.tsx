'use client';

import React, { useState } from 'react';
import LoginInputFields from '../../../../components/authpageComp/logininputFields';
import Buttons from '../../../../components/authpageComp/loginButton';
import { useRouter } from 'next/navigation';
import AnimatedLoader from '../../../../components/loading';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'doctor', // Default to 'doctor', can be toggled to 'patient'
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError('');
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const { email, password, userType } = formData;
  
    // Basic validation
    if (!email || !password) {
      setError('Please fill out both email and password fields.');
      return;
    }
  
    setError(''); // Clear any previous errors
    setLoading(true); // Set loading state
  
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://dz-tabib-backend.vercel.app/login', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.withCredentials = true; // Enables sending cookies
    
      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          console.log(data);
          router.push('/pages/dashDoc');
        } else {
          const data = JSON.parse(xhr.responseText);
          setError(data.message || 'Invalid email or password.');
        }
      };
    
      xhr.onerror = () => {
        console.error('Network error');
        setError('An unexpected error occurred.');
      };
    
      xhr.send(JSON.stringify({ email, password, userType }));
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
    
    
  };




  return (
    <div className="m-auto w-full flex flex-col justify-center items-center height-full">
      {loading ? (
        <div className="flex h-full w-full">
          <AnimatedLoader />
        </div>
      ) : (
        <>
          <div className="text-[40px] font-bold text-gray-800 mb-4">Login</div>
          <div className="text-[20px] text-gray-600 mb-8">Enter your credentials</div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[80%] bg-white rounded-lg"
          >
            <LoginInputFields 
              formData={formData} 
              handleInputChange={handleInputChange}
            />

            {/* User Type Toggle */}
            <div className="mt-4">
              <label className="block text-[20px] text-gray-700">Login as:</label>
              <select
                name="userType"
                value={formData.userType}
                onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                className="w-full px-4 py-2 h-[50px] text-[20px] border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
              >
                <option value="doctor">doctor</option>
                <option value="patient">patient</option>
              </select>
            </div>

            {error && (
              <div className="text-red-500 text-sm p-2 bg-red-50 rounded-md">
                {error}
              </div>
            )}

            <Buttons />
          </form>

          <div className="text-[20px] text-center text-gray-600 mt-4">
            Dont have an account?{' '}
            <a href="/pages/auth/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </div>
        </>
      )}
    </div>
  );
}