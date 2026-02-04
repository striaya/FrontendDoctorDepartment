import api from "../../../../api/axios";

export const getSchedules = (page = 0, size = 10) => {
    return api.get("/schedule", {
        params: {page, size},
    });
};

export const createSchedule = (data) => {
    return api.post("/schedule", data);
};