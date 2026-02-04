import api from "../../../../api/axios";

export const getAuths = async () => {
    return api.get("/auth");
};

export const loginUser = (data) => {
    return api.post("/auth/login", data)
};