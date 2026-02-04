import './App.css'
// import Navbar from '../src/components/Navbar'
import {Routes, Route, useLocation} from "react-router-dom";

import Schedule from "./fitur/schedule/Page/Schedule";
import Home from "./fitur/home/Page/Home";
import Login from "./fitur/auth/Page/Auth";
import Doctor from "./fitur/doctor/Page/Doctor";
import Department from "./fitur/department/Page/Department";
import NavbarAuth from './components/NavbarAuth';
import Navbar from './components/Navbar';

export default function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/Auth";
  return(
    <>

    {isAuthPage ? <NavbarAuth /> : <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Login />} />
        <Route path='/Doctor' element={<Doctor />} />
        <Route path='/Department' element={<Department />} />
        <Route path='/Schedule' element={<Schedule />} />
      </Routes>
       </>
  );
}