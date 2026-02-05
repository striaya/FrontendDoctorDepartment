import { useEffect, useState } from "react";
import { getDoctors, createDoctor } from "../services/doctorService";

export default function useDoctor() {
  const [doctors, setDoctor] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDoctors = async (page = 0, size = 10) => {
    try {
      setLoading(true);
      const res = await getDoctors(page, size);

      setDoctor(res.data.doctors ?? res.data);
      console.log("API RESPONSE", res.data);
    } catch (err) {
      console.error("Failed fetch doctors:", err);
    } finally {
      setLoading(false);
    }
  };

  const addDoctor = async (data) => {
    try {
      await createDoctor(data);

      fetchDoctors();
    }catch (err) {
      console.error("Failed to add doctor:", err);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return {
    doctors,
    loading,
    fetchDoctors,
    addDoctor
  }
}