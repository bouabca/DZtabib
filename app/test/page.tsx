"use client"; // Mark this component as a Client Component

import axios from "axios";
import { useState } from "react"; // Optional: if you want to handle state

interface CookieResponse {
  [key: string]: string;  // You can adjust this based on the actual structure of the cookies
}

const fetchDataWithCredentials = async (): Promise<CookieResponse> => {
  try {
    const response = await axios.get('https://dz-tabib-backend.onrender.com/cookie', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data; // Now TypeScript knows this is of type CookieResponse
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default function Home() {
  const [data, setData] = useState<CookieResponse | null>(null); // Optional: if you want to display the fetched data

  const handleClick = async () => {
    try {
      const result = await fetchDataWithCredentials();
      setData(result); // Optional: if you want to display the fetched data
      console.log("Data fetched:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <button 
        className="m-auto w-[300px] h-[40px] bg-white text-black" 
        onClick={handleClick}
      >
        GET request
      </button>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Optional: if you want to display the fetched data
      )}
    </>
  );
}