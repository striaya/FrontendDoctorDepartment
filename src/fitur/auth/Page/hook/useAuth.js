import { useEffect, useState } from "react";
import { getAuths } from "../services/authService";

export default function useAuth() {
    const [ login, setLogin ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const fetchAuths = async (page = 0, size = 10)=> {
        try {
            setLoading(true);
            const res = await getAuths(page, size);

            setLogin(res.data.logins ?? res.data);
            console.log("API RESPONSE", res.data);
        }catch (err) {
            console.error("Failed fetch logins:", err);
        }finally {
            setLoading(false);
        }
        };

        useEffect(() => {
            fetchAuths();
        }, []);

        return {
            login,
            loading
        }
    }