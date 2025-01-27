import axios from "axios";


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
  return (
    <>
    <button className="m-auto w-[300px] h-[40px] bg-white text-black" onClick={fetchDataWithCredentials}> GET request</button>
    </>



  );
}
