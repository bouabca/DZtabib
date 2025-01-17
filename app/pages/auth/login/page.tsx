'use client';
import React, { useState } from 'react';
import LoginInputFields from '../../../../components/authpageComp/logininputFields';
import Buttons from '../../../../components/authpageComp/loginButton';
import { useAuth } from '../../../../context/AuthContext';
import { useRouter } from 'next/navigation';
import AnimatedLoader from '../../../../components/loading';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { setToken, token, userdata } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=====================================")
    console.log(token)
    console.log(userdata)
    console.log("=====================================")

    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }

    setError('');
    setLoading(true); // Start loading

    try {
      console.log("URL");
      console.log(process.env.URL);
      const response = await fetch(`https://dztabib.onrender.com/api/auth/login/`, {
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
        setToken(data.key);
        router.push('/dashDoc/appointments');
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false); // Stop loading regardless of outcome
    }
  };

  return (
    <div className="m-auto w-full flex flex-col justify-center items-center height-full">
      {loading ? (
  <div className="flex  h-full w-full">  <AnimatedLoader /></div>
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