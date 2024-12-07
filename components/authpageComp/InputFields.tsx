
import React from 'react';

type InputFieldsProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    password: string;
    confirmPassword: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFields: React.FC<InputFieldsProps> = ({ formData, handleInputChange }) => {
  return (
    <>
      {/* First and Last Name */}
      <div className="flex flex-col md:flex-row  justify-center items-center space-x-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        />
      </div>

      {/* Email and Birth Date */}
      <div className="flex flex-col md:flex-row  justify-center items-center space-x-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        />
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleInputChange}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        />
      </div>

      {/* Password and Confirm Password */}
      <div className="flex flex-col md:flex-row  justify-center items-center space-x-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        />
      </div>
    </>
  );
};

export default InputFields;
