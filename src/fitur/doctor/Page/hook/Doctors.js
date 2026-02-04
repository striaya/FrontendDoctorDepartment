import { useEffect, useState } from "react";
import { getDoctors } from "../services/doctorService";

export default function Doctors() {
  const [doctors, Doctor] = useState([]);
  const [loading, Loading] = useState(false);

  const fetchDoctors = async (page = 0, size = 10) => {
    try {
      Loading(true);
      const res = await getDoctors(page, size);

      Doctor(res.data.doctors ?? res.data);
      console.log("API RESPONSE", res.data);
    } catch (err) {
      console.error("Failed fetch doctors:", err);
    } finally {
      Loading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return {
    doctors,
    loading
  }
}