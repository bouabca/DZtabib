import React, { useState } from "react";

interface LoginInputFieldsProps {
  formData: {
    email: string;
    password: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInputFields: React.FC<LoginInputFieldsProps> = ({ formData, handleInputChange }) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = (name: string, value: string) => {
    let error = "";

    if (name === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!value) {
        error = "Email is required";
      } else if (!emailPattern.test(value)) {
        error = "Please enter a valid email address";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 8) {
        error = "Password must be at least 8 characters long";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleInputChangeWithValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleInputChange(e);
    validate(name, value);
  };

  return (
    <div className="space-y-4">
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChangeWithValidation}
          placeholder="Enter your email"
          className={`w-full px-4 py-2 h-[50px] border rounded-md focus:outline-none focus:ring-2 ${
            errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChangeWithValidation}
          placeholder="Enter your password"
          className={`w-full px-4 py-2 h-[50px] border rounded-md focus:outline-none focus:ring-2 ${
            errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
          required
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
    </div>
  );
};

export default LoginInputFields;
