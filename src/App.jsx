import './App.css'
import Navbar from '../src/components/Navbar'
import {Routes, Route} from "react-router-dom";

import Schedule from "./fitur/schedule/Page/Schedule";
import Home from "./fitur/home/Page/Home";
import Login from "./fitur/auth/Page/Auth";
import Doctor from "./fitur/doctor/Page/Doctor";
import Department from "./fitur/department/Page/Department";

export default function App() {
  return(
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Login />} />
        <Route path='/Doctor' element={<Doctor />} />
        <Route path='/Department' element={<Department />} />
        <Route path='/Schedule' element={<Schedule />} />
      </Routes>
  );
}