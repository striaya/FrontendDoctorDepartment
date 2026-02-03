import { Link } from "react-router-dom";

export default function NavbarAuth(){
    return (
        <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd">
            <div class="container">
                <a class="navbar-brand" href="#"><i class="fa-solid fa-notes-medical fa-lg"></i> e-Doc</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-targer="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" area-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}