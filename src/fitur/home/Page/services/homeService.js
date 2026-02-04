import api from "../../../../api/axios";

export const getHomes = ( page = 0, size = 10 ) => {
    return api.get("/home", {
        params: {page, size},
    });
};

export const createHome = (data) => {
    return api.post("/home", data);
};