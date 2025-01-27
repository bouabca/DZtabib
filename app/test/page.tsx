import axios from "axios";


const fetchDataWithCredentials = async (): Promise<any> => {
    try {
      const response = await axios.get('https://dz-tabib-backend.onrender.com', {
        withCredentials: true, // Include credentials (cookies, authentication headers)
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
      
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
