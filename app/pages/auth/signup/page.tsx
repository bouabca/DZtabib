'use client';
import React, { useState } from 'react';
import RoleSelection from '../../../../components/authpageComp/RoleSelection';
import InputFields from '../../../../components/authpageComp/InputFields';
import Buttons from '../../../../components/authpageComp/Buttons';
import { useAuth } from '@/context/AuthContext';
export default function Signup() { 

  const {userdata ,setToken , setuserdata } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
    userType: 'patient', // Either "doctor" or "patient"
    speciality: '', // New field
    diplomaCode: '', // New field
  
  });
  const [error, setError] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleUserTypeChange = (type: string) => {
    setFormData({ ...formData, userType: type });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Check if all fields are filled
    const {
      firstName,
      lastName,
      email,
      birthDate,
      password,
      confirmPassword,
      userType,
      speciality,
      diplomaCode,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !birthDate ||
      !password ||
      !confirmPassword ||
      !userType ||
      !speciality || // Check if speciality is filled
      !diplomaCode   // Check if diplomaCode is filled
    ) {
      setError('Please fill out all fields.');
      // return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      // return;
    }

    setError('');

    // Fetch request with POST method
    try {
      const response = await fetch('https://dztabib.onrender.com/auth/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email ,
            username: email,
            password,
           
        }),
          //             firstName,
          //          lastName,
          //           email,
          // birthDate,
          // password,
          // userType,
          // speciality, // Include speciality in the body
          // diplomaCode, // Include diplomaCode in the body
      });

    

      const userData = await response.json();
      setuserdata(userData)
      console.log('Response from server:', userdata);
      setToken(userData.access)
      console.log('User creation response:', userData);
    if(userData.access){
      const accessToken = userData.access ;
    if(userType === 'doctor'){
      // fetch request for doctor
      const doctorResponse = await fetch('https://dztabib.onrender.com/auth/doctors/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${accessToken}` ,},
          body: JSON.stringify({
           first_name: firstName,
            last_name: lastName,
            date_of_birth: birthDate,
            speciality,
            diploma_code: diplomaCode,
          }) })
          if (!doctorResponse.ok) {
            throw new Error('Failed to create doctor');
          }

          const doctorData = await doctorResponse.json();
          console.log('Doctor creation response:', doctorData);
        }else if(userType === 'patient'){
          const patientResponse = await fetch('https://dztabib.onrender.com/auth/patient/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `JWT ${accessToken}` ,},
              body: JSON.stringify({
               first_name: firstName,
                last_name: lastName,
                birth_date: birthDate,
              }) })
              if (!patientResponse.ok) {
                throw new Error('Failed to create patient');
              }
              const patientData = await patientResponse.json();
              console.log('Patient creation response:', patientData);

            }
        } 

    } catch (error) {
      // console.log(firstName, lastName, email, birthDate, password, userType, speciality, diplomaCode);
      console.error('Error:', error);
    }
  };





  return (
    <div className="mx-auto w-full flex flex-col justify-center items-center py-10 px-4">
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
        className="w-full bg-white rounded-lg p-6 space-y-6"
      >
        {/* Input Fields */}
        <InputFields 
          formData={formData} 
          type={formData.userType}
          handleInputChange={handleInputChange}
        />

        {/* Error Message */}
        {error && <div className="text-red-500 text-sm">{error}</div>}

<button onClick={handleSubmit}>Handel submit </button>

        {/* Buttons */}
        <Buttons  handleSubmit={handleSubmit}/>
      </form>
      <div className="text-[20px] text-center text-gray-600 mt-4">
        Already have an account?{' '}
        <a href="/pages/auth/login" className="text-blue-500 hover:underline">
          Log in
        </a>
      </div>
    </div>
  );
}
