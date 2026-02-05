import api from "../../../../api/axios";

export const getDepartments = ( page = 0, size = 10 ) => {
    return api.get("/departement", {
        params: { page, size },
    });
};

export const createDepartment = (data) => {
    return api.post("/departement", data);
};