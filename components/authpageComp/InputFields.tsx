import React, { useState, useEffect } from 'react';

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
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const validate = () => {
    let valid = true;
    const newErrors = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

    // Validate first and last name
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    // Validate password length and complexity
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    }

    // Validate confirm password matches
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChangeWithDebounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);

    // Clear any existing timeout to reset the debouncing
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set a new timeout for 100ms after the last keystroke
    const timer = setTimeout(() => {
      validate(); // Run validation after 100ms of no typing
    }, 100);

    // Store the timeout id to clear it on the next input
    setDebounceTimer(timer);
  };

  return (
    <div className="flex flex-col space-y-4 justify-between">
      {/* First and Last Name Row */}
      <div className="w-full gap-4 flex flex-col md:flex-row md:space-x-4">
        <div className="w-full gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChangeWithDebounce}
            className="w-full gap-4 h-12 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        <div className="w-full gap-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChangeWithDebounce}
            className="w-full gap-4 h-12 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email and Birth Date Row */}
      <div className="w-full gap-4 flex flex-col md:flex-row md:space-x-4">
        <div className="w-full gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChangeWithDebounce}
            className="w-full gap-4 h-12 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="w-full gap-4">
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChangeWithDebounce}
            className="w-full gap-4 h-12 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
        </div>
      </div>

      {/* Password and Confirm Password Row */}
      <div className="w-full gap-4 flex flex-col md:flex-row md:space-x-4">
        <div className="w-full gap-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChangeWithDebounce}
            className="w-full gap-4 h-12 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="w-full gap-4">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChangeWithDebounce}
            className="w-full gap-4 h-12 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>
      </div>
    </div>
  );
};

export default InputFields;
