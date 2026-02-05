import { Link } from "react-router-dom";

export default function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container">
          <a className="navbar-brand" href="/"><i className="fa-solid fa-notes-medical fa-lg"></i> e-Doc</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><i className="fa-solid fa-xs fa-house"></i> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Schedule"><i className="fa-solid fa-xs fa-calendar-days"></i> Schedules</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-xs fa-rectangle-list"></i> Referensi
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="Doctor"><i className="fa-solid fa-xs fa-user-doctor"></i> Doctors</a></li>
                  <li><a className="dropdown-item" href="Department"><i className="fa-solid fa-xs fa-building"></i> Departments</a></li>
                </ul>
              </li>
            </ul>
            <span className="navbar-text">
              <a className="nav-link active" aria-current="page" href="Auth"><i className="fa-solid fa-xs fa-sign-out"></i> Logout</a>
            </span>
          </div>
        </div>
      </nav>
  );
}
