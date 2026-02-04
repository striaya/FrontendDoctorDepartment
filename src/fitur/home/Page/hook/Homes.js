import { useEffect, useState } from "react";
import {getHomes} from "../services/homeService";

export default function Homes() {
    const [ home, Home ] = useState([]);
    const [ loading, Loading ] = useState(false);

    const fetchHomes = async (page = 0, size = 10)=> {
        try {
            Loading(true);
            const res = await getHomes(page, size);

            Home(res.data.homes ?? res.data);
            console.log("API RESPONSE", res.data);
        }catch (err) {
            console.error("Failed fetch homes:", err);
        }finally {
            Loading(false)
        }
    };

    useEffect(() => {
        fetchHomes();
    }, []);

    return {
        home,
        loading
    }
}