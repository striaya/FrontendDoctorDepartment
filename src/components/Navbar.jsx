import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg" style="background-color: #ffff">
            <div class="container">
                <a class="navbar-brand" href="#"><i class="fa-solid fa-notes-medical fa-lg"></i> e-Doc</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="#navbarNavDropdown" arial-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggle-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#"><i class="fa-solid da-xs fa-house"></i> Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#"><i class="fa-solid da-xs fa-house"></i> Schedules</a>
                        </li>
                        <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-xs fa-rectangle-list"></i> Referensi
                </a>
                <ul class="dropdown-menu show">
                  <li><a class="dropdown-item" href="#"><i class="fa-solid fa-xs fa-user-doctor"></i> Doctors</a></li>
                  <li><a class="dropdown-item active" href="#"><i class="fa-solid fa-xs fa-building"></i> Departments</a></li>
                </ul>
              </li>
                    </ul>
                    <span class="navbar-text">
                        <a class="nav-link active" aria-current="page" href="login.html"><i class="fa-solid fa-xs fa-sign-out"></i> Logout</a>
                    </span>
                </div>
            </div>
        </nav>
    )
}