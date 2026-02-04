import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fa-solid fa-notes-medical fa-lg"></i> e-Doc
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <i className="fa-solid fa-xs fa-house"></i> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Schedule">
                <i className="fa-solid fa-xs fa-calendar-days"></i> Schedules
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                <i className="fa-solid fa-xs fa-rectangle-list"></i> Referensi
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/Doctor">
                    <i className="fa-solid fa-xs fa-user-doctor"></i> Doctors
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/Department">
                    <i className="fa-solid fa-xs fa-building"></i> Departments
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <span className="navbar-text">
            <Link className="nav-link active" to="/Auth">
              <i className="fa-solid fa-xs fa-sign-out"></i> Logout
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}
