// import axios from "axios";

// const instance = axios.create({
//     baseUrl: "http://localhost:8000/api/v1",
//     timeout: 1000,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// instance.intereptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");

//         if(token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
