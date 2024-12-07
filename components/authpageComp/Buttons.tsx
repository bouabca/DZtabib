
import React from 'react';

const Buttons: React.FC = () => {
  return (
    <div className="flex mt-4 gap-4 flex-col md:flex-row ">
      <button
        type="submit"
        className="w-full md:w-1/2 bg-[#007AFF] text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition-all"
      >
        Create Account
      </button>
      <button
        type="button"
        className="w-full md:w-1/2 bg-[#2D3748] text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-700 transition-all"
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default Buttons;
