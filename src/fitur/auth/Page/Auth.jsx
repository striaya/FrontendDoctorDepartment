import { useState } from "react";
import useAuth from "./hook/useAuth";
import { useNavigate } from "react-router-dom";

export default function NavbarAuth() {
  const { login, loading, error } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(username, password);
      localStorage.setItem("token", res.token); 
      alert("Login sukses!");
      navigate("/")
      console.log(res);
    } catch {
      // error sudah di hook
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">

            <div
              className="card-header text-center"
              style={{ backgroundColor: "#e3f2fd" }}
            >
              <h1>
                <i className="fa-solid fa-notes-medical fa-lg"></i> e-Doc
              </h1>
            </div>

            <div className="card-body">
              <h5 className="card-title mb-4">Login Form</h5>

              {error && <p className="text-danger">{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Sign In"}
                  </button>
                </div>
              </form>

            </div>

            <div className="card-footer text-center">
              Copyright © 2025
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
