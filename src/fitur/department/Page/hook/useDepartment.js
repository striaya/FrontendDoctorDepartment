import { useEffect, useState } from "react";
import { getDepartments } from "../services/departmentService";
import { createDepartment } from "../services/departmentService";

export default function useDepartment() {
    const [ department, setDepartment ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const fetchDepartments = async (page = 0, size = 10) => {
        try {
            setLoading(true);
            const res = await getDepartments(page, size);

            setDepartment(res.data.departments ?? res.data);
            console.log("API RESPONSE", res.data); 
        } catch (err) {
            console.error("Failed to fetch departments:", err);
        } finally {
            setLoading(false);
        }
    };

const addDepartment = async (data) => {
  try {
    await createDepartment(data);

    fetchDepartments();
  } catch (err) {
    console.error("Failed to add department:", err);
  }
};


    useEffect(() => {
        fetchDepartments();
    }, []);

    return {
        department,
        loading,
        fetchDepartments,
        addDepartment
    }
}
