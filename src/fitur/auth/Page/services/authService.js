import api from "../../../../api/axios";

export const loginUser = (data) => {
    return api.post("/login", data)
};

export const getAuths = async () => {
    return api.get("/auth");
};
