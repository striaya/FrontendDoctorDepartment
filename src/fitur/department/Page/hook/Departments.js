import { useEffect, useState } from "react";
import { getDepartments } from "../services/departmentService";

export default function Departments() {
    const [ department, Department ] = useState([]);
    const [ loading, Loading ] = useState(false);

    const fetchDepartments = async (page = 0, size = 10) => {
        try {
            Loading(true);
            const res = await getDepartments(page, size);

            Department(res.data.departments ?? res.data);
            console.log("API RESPONSE", res.data); 
        } catch (err) {
            console.error("Failed to fetch departments:", err);
        } finally {
            Loading(false);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    return {
        department,
        loading
    }
}
