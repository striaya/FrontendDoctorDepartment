import api from "../../../../api/axios";

export const getDepartments = ( page = 0, size = 10 ) => {
    return api.get("/department", {
        params: { page, size },
    });
};

export const createDepartment = (data) => {
    return api.post("/department", data);
};