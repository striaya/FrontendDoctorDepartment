import useAuth from "./hook/useAuth";

export default function NavbarAuth(){  

    const { login, loading } = useAuth();

    if (loading) {
        return <p>Loading...</p>
    }
    return(
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header text-center" style={{backgroundColor: "#e3f2fd"}}>
                            <h1><i className="fa-solid fa-notes-medical fa-lg"></i> e-Doc</h1>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title mb-4">Login Form</h5>
                            {login.map((item, index) => (
                                <p key={index}>{item.username}</p>
                            ))}
                            <div className="form-group mb-4">
                                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                            </div>
                            <div className="checkbox mb-4">
                                <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                                </label>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-xs btn-primary" type="submit">Sign in</button>
                            </div>
                        </div>
                        <div className="card-footer text-body-secondary text-center">
                            Copyright &copy; 2025
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}