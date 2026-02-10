import { useEffect, useState } from "react";
import { getDepartments } from "../services/departmentService";
import { createDepartment } from "../services/departmentService";

export default function useDepartment() {
    const [ departments, setDepartment ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const fetchDepartments = async (page = 0, size = 10) => {
        try {
      setLoading(true);
      const res = await getDepartments(page, size);
      setDepartment(res.data.departments);

        } catch (err) {
          console.log("STATUS:", err.response?.status);
          console.log("ERROR DATA:", err.response?.data);
          console.log("ERROR MESSAGE:", err.response?.data?.message);
          console.log("ERROR DETAILS:", err.response?.data?.errors);
        } finally {
            setLoading(false);
        }
    };

const addDepartment = async (data) => {
  try {
    setLoading(true);
    await createDepartment(data);
    await fetchDepartments();

  } catch (err) {
      console.log("STATUS:", err.response?.status);
      console.log("ERROR DATA:", err.response?.data);
      console.log("ERROR MESSAGE:", err.response?.data?.message);
      console.log("ERROR DETAILS:", err.response?.data?.errors);  }
 finally {
    setLoading(false);
  }
};

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
      fetchDepartments();
    }
  }, []);


    return {
        departments,
        loading,
        fetchDepartments,
        addDepartment
    };
};  
