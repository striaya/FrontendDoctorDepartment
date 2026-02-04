import { Link } from "react-router-dom";

export default function NavbarAuth(){
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container">
                <a className="navbar-brand" href="/"><i className="fa-solid fa-notes-medical fa-lg"></i> e-Doc</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}