// import useLogin from "./hook/Logins";

// export default function NavbarAuth() {

//   // 🔥 PANGGIL HOOK DI SINI
//   const { login, loading } = useLogin();

//   // optional: tampil loading
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="container my-4">
//       <div className="row justify-content-center">
//         <div className="col-6">
//           <div className="card">

//             <div
//               className="card-header text-center"
//               style={{ backgroundColor: "#e3f2fd" }}
//             >
//               <h1>
//                 <i className="fa-solid fa-notes-medical fa-lg"></i> e-Doc
//               </h1>
//             </div>

//             <div className="card-body">

//               <h5 className="card-title mb-4">Login Form</h5>

//               {/* 🔽 CONTOH PAKAI DATA DARI API */}
//               {login.map((item, index) => (
//                 <p key={index}>{item.username}</p>
//               ))}

//               <div className="form-group mb-4">
//                 <label htmlFor="inputEmail" className="sr-only">
//                   Email address
//                 </label>

//                 <input
//                   type="email"
//                   id="inputEmail"
//                   className="form-control"
//                   placeholder="Email address"
//                   autoFocus
//                 />
//               </div>

//               <div className="form-group mb-4">
//                 <label htmlFor="inputPassword" className="sr-only">
//                   Password
//                 </label>

//                 <input
//                   type="password"
//                   id="inputPassword"
//                   className="form-control"
//                   placeholder="Password"
//                 />
//               </div>

//               <div className="checkbox mb-4">
//                 <label>
//                   <input type="checkbox" /> Remember me
//                 </label>
//               </div>

//               <div className="d-grid gap-2">
//                 <button className="btn btn-primary" type="submit">
//                   Sign in
//                 </button>
//               </div>

//             </div>

//             <div className="card-footer text-center">
//               Copyright © 2025
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import axios from "axios";

// const API_URL = "http://localhost:8000/api"; 
// // ganti kalau backend kamu beda

// // GET semua auth / user (contoh)
// export const getAuths = (page = 0, size = 10) => {
//   return axios.get(`${API_URL}/auth?page=${page}&size=${size}`);
// };

// // LOGIN
// export const loginUser = (data) => {
//   return axios.post(`${API_URL}/auth/login`, data);
// };

// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:8000/api", // backend kamu
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Interceptor (optional, tapi penting nanti)
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default instance;

// import api from "../../../api/axios";

// // GET user
// export const getAuths = () => {
//   return api.get("/auth");
// };

// // LOGIN
// export const loginUser = (data) => {
//   return api.post("/auth/login", data);
// };



// import api from "../../../api/axios";

// export const getDoctors = (page = 0, size = 10) => {
//   return api.get("/doctor", {
//     params: { page, size },
//   });
// };

// export const createDoctor = (data) => {
//   return api.post("/doctor", data);
// };