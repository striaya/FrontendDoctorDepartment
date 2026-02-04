import api from "../../../../api/axios";

export const getDoctors = (page = 0, size = 10) => {
    return api.get("/doctor", {
        params: {page, size},
    });
};

export const createDoctor = (data) => {
    return api.post("/doctor", data);
};