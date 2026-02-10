import api from "../../../../api/axios";

export const getDoctors = (page = 0, size = 10) => {
    return api.get("/doctor", {
        params: {page, size},
    });
};

export const createDoctor = (data) => {
    const form = {
        doctorID: data.doctorID,
        name: data.doctorName,
        gender: data.gender,
        phone: data.phone,
        address: data.address,
        email: data.email,
        bio: data.bio,
    };

      console.log("FORM SENT:", form);

    return api.post("/doctor", form);
};