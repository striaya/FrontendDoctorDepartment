import api from "../../../../api/axios";

export const getDepartments = ( page = 0, size = 10 ) => {
    return api.get("/departement", {
        params: { page, size },
    });
};

export const createDepartment = (data) => {
       const form = {
        departementId: data.departmentID,
        name: data.departmentName,
        description: data.departmentDesc,
    };

      console.log("FORM SENT:", form);

    return api.post("/departement", form);
};