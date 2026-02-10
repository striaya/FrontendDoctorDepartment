import { useState, useEffect } from "react";
import { getSchedules, createSchedule } from "../services/scheduleService";

export default function useSchedule() {
    const [schedules, setSchedule ] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSchedules = async (page = 0, size = 10) => {
        try {
            setLoading(true);
            const res = await getSchedules(page, size);
            setSchedule(res.data.schedules);

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

    const addSchedule = async (data) => {
        try{
            setLoading(true);
            await createSchedule(data);
            await fetchSchedules();

        }catch (err) {
        console.log("STATUS:", err.response?.status);
        console.log("ERROR DATA:", err.response?.data);
        console.log("ERROR MESSAGE:", err.response?.data?.message);
        console.log("ERROR DETAILS:", err.response?.data?.errors);        
        }finally {
            setLoading(false)
        }
    };

    useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
        fetchSchedules();
    }    }, []);

     return {
        schedules,
        loading,
        fetchSchedules,
        addSchedule
     }
}