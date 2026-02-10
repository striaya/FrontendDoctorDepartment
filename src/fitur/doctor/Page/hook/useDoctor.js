import { useEffect, useState } from "react";
import { getDoctors, createDoctor } from "../services/doctorService";

export default function useDoctor() {
  const [doctors, setDoctor] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDoctors = async (page = 0, size = 10) => {
    try {
      setLoading(true);
      const res = await getDoctors(page, size);
      setDoctor(res.data.doctors);

    } catch (err) {
  console.log("STATUS:", err.response?.status);
  console.log("ERROR DATA:", err.response?.data);
  console.log("ERROR MESSAGE:", err.response?.data?.message);
  console.log("ERROR DETAILS:", err.response?.data?.errors);
}
 finally {
      setLoading(false);
    }
  };

const addDoctor = async (data) => {
  try {
    setLoading(true);
    await createDoctor(data);
    await fetchDoctors(); 
  } catch (err) {
  console.log("STATUS:", err.response?.status);
  console.log("ERROR DATA:", err.response?.data);
  console.log("ERROR MESSAGE:", err.response?.data?.message);
  console.log("ERROR DETAILS:", err.response?.data?.errors);
}
 finally {
    setLoading(false);
  }
};
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
      fetchDoctors();
    }
  }, []);

  return {
    doctors,  
    loading,
    fetchDoctors,
    addDoctor
  }
}
