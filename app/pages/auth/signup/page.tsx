'use client';
import React, { useState } from 'react';
import RoleSelection from '../../../../components/authpageComp/RoleSelection';
import InputFields from '../../../../components/authpageComp/InputFields';
import Buttons from '../../../../components/authpageComp/Buttons';

import AnimatedLoader from '../../../../components/loading';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
  userType: 'patient' | 'doctor';
  speciality: string;
  diplomaCode: string;
}

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
    userType: 'patient',
    speciality: '',
    diplomaCode: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleUserTypeChange = (type: string) => {
    if (type === 'patient' || type === 'doctor') {
      setFormData(prev => ({ ...prev, userType: type }));
      if (type === 'patient') {
        setFormData(prev => ({ ...prev, speciality: '', diplomaCode: '' }));
      }
    }
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'birthDate', 'password', 'confirmPassword'];
    const doctorFields = ['speciality', 'diplomaCode'];

    const emptyFields = requiredFields.filter(field => !formData[field as keyof FormData]);
    if (formData.userType === 'doctor') {
      emptyFields.push(...doctorFields.filter(field => !formData[field as keyof FormData]));
    }

    if (emptyFields.length > 0) {
      setError(`Please fill in the following fields: ${emptyFields.join(', ')}`);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    const birthDate = new Date(formData.birthDate);
    const today = new Date();
    if (birthDate >= today) {
      setError('Birth date must be in the past');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const userResponse = await fetch('https://dztabib.onrender.com/auth/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.email,
          password: formData.password,
        }),
      });

      if (!userResponse.ok) {
        const errorData = await userResponse.json();
        throw new Error(errorData.detail || 'Failed to create user account');
      }

      const userData = await userResponse.json();

      const profileEndpoint = formData.userType === 'doctor'
        ? 'https://dztabib.onrender.com/medical/doctor/'
        : 'https://dztabib.onrender.com/medical/patient/';

      const profileData = formData.userType === 'doctor'
        ? {
            first_name: formData.firstName,
            last_name: formData.lastName,
            date_of_birth: formData.birthDate,
            speciality: formData.speciality,
            diploma_code: formData.diplomaCode,
          }
        : {
            first_name: formData.firstName,
            last_name: formData.lastName,
            birth_date: formData.birthDate,
          };

      const profileResponse = await fetch(profileEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${userData.access}`,
        },
        body: JSON.stringify(profileData),
      });

      if (!profileResponse.ok) {
        const errorData = await profileResponse.json();
        throw new Error(errorData.detail || `Failed to create ${formData.userType} profile`);
      }
      
         console.log(userData.access)
              
         console.log(userData.refresh)

         const cookieResponse = await fetch('/pages/auth/cookie', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            accessToken: userData.access,
            refreshToken: userData.refresh,
          }),
        });

        // Check if the cookie request was successful
        if (cookieResponse.ok) {
          console.log("Tokens saved successfully.");
          // Redirect to the dashboard
          router.push('/pages/dashDoc');
        } else {
          setError('Failed to save tokens. Please try again later.');
        }


      console.log('User successfully registered as', formData.userType);
      if (formData.userType === 'doctor') {
        
        router.push('/pages/dashDoc'); // Navigate to the doctor's dashboard
      } else if (formData.userType === 'patient') {
        
        router.push('/pages/dashPat'); // Navigate to the patient's dashboard
      } else {
        console.error('Invalid user role'); // Handle unexpected roles
      }
      
      
    } catch (error) {
      console.error('Error during signup:', error);
      setError(error instanceof Error ? error.message : 'An error occurred during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full flex flex-col justify-center items-center py-10 px-4">
      {loading ? (
        <div className="m-auto bg-red h-[100vh] w-full flex justify-center items-center p-2">
          <AnimatedLoader />
        </div>
      ) : (
        <>
          <div className="text-[40px] font-bold text-gray-800 mb-4">Create Account</div>
          <RoleSelection userType={formData.userType} handleUserTypeChange={handleUserTypeChange} />
          <form onSubmit={handleSubmit} className="w-full max-w-full bg-white rounded-lg p-6">
            {error && (
              <div className="text-red-500 text-sm p-2 bg-red-50 rounded-md mb-4">{error}</div>
            )}
            <InputFields formData={formData} type={formData.userType} handleInputChange={handleInputChange} />
            <Buttons handleSubmit={handleSubmit} />
          </form>
          <div className="text-[20px] text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link href="/pages/auth/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
