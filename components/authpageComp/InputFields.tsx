import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons for show/hide password

type InputFieldsProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    password: string;
    confirmPassword: string;
    speciality: string; // New field
    diplomaCode: string; // New field
 

  };
  type : string ;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFields: React.FC<InputFieldsProps> = ({ formData,type, handleInputChange },) => {
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateField = (name: string, value: string) => {
    let errorMessage = '';

    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          errorMessage = 'First name is required';
        }
        break;

      case 'lastName':
        if (!value.trim()) {
          errorMessage = 'Last name is required';
        }
        break;

      case 'email':
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(value)) {
          errorMessage = 'Please enter a valid email address';
        }
        break;

      case 'password':
        if (value.length < 8) {
          errorMessage = 'Password must be at least 8 characters';
        }
        break;

      case 'confirmPassword':
        if (value !== formData.password) {
          errorMessage = 'Passwords do not match';
        }
        break;

      default:
        break;
    }

    return errorMessage;
  };

  const handleInputChangeWithValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleInputChange(e);

    const fieldError = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  return (
    <div className="flex flex-col space-y-4 justify-between">
      {/* First and Last Name */}
      <div className="w-full gap-4 flex flex-col md:flex-row md:space-x-4">
        <div className="w-full">
          <label className="text-gray-700 font-medium text-[24px]">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChangeWithValidation}
            className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        <div className="w-full">
          <label className="text-gray-700 font-medium text-[24px]">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChangeWithValidation}
            className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email and Birth Date */}
      <div className="w-full gap-4 flex flex-col md:flex-row md:space-x-4">
        <div className="w-full">
          <label className="text-gray-700 font-medium text-[24px]">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChangeWithValidation}
            className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="w-full">
          <label className="text-gray-700 font-medium text-[24px]">Birth Date</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
        </div>
      </div>

      {/* Speciality and Diploma Code */}
      {
        (type != "patient") ? 
        
        <div className="w-full gap-4 flex flex-col md:flex-row md:space-x-4">
        <div className="w-full">
          <label className="text-gray-700 font-medium text-[24px]">Speciality</label>
          <input
            type="text"
            name="speciality"
            placeholder="Speciality"
            value={formData.speciality}
            onChange={handleInputChange}
            className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
        </div>

        <div className="w-full">
          <label className="text-gray-700 font-medium text-[24px]">Diploma Code</label>
          <input
            type="text"
            name="diplomaCode"
            placeholder="Diploma Code"
            value={formData.diplomaCode}
            onChange={handleInputChange}
            className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
        </div>
      </div>
        : 
        <></>
      }
     

      {/* Password and Confirm Password */}
      <div className="w-full gap-4 flex flex-col md:flex-row md:space-x-4">
        <div className="w-full relative">
          <label className="text-gray-700 font-medium text-[24px]">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChangeWithValidation}
              className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="w-full relative">
          <label className="text-gray-700 font-medium text-[24px]">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChangeWithValidation}
              className="w-full h-12 px-4 py-2 border text-[20px] border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </span>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        
      </div>

      {/* Remember Me */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="w-5 h-5 text-blue-600 border-gray-300 mt-1 cursor-pointer rounded focus:ring-blue-500"
        />
        <label onClick={()=> setRememberMe(!rememberMe)} className="text-[20px] cursor-pointer hover:text-blue-400 duration-100 ease-in text-gray-700">Remember Me</label>
      </div>
    </div>
  );  
};

export default InputFields;
