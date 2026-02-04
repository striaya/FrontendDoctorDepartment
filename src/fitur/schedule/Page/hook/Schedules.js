import { useState, useEffect } from "react";
import { getSchedules } from "../services/scheduleService";

export default function Schedules() {
    const [schedule, Schedule] = useState([]);
    const [loading, Loading] = useState(false);

    const fetchSchedules = async (page = 0, size = 10) => {
        try {
            Loading(true);
            const res = await getSchedules(page, size);

            Schedule(res.data.schedules ?? res.data);
            console.log("API RESPONSE", res.data);
        }catch (err) {
            console.error("Failed fetch schedules:", err);
        }finally {
            Loading(false);
        }
    };

    useEffect(() => {
        fetchSchedules();
    }, []);

     return {
        schedule,
        loading
     }
}