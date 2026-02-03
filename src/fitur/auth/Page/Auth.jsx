export default function NavbarAuth(){
    return(
        <div className="container my-4">
            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header text-center" style={{backgroundColor: "#e3f2fd"}}>
                            <h1><i class="fa-solid fa-notes-medical fa-lg"></i> e-Doc</h1>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-4">Login Form</h5>
                            <div class="form-group mb-4">
                                <label htmlFor="inputEmail" class="sr-only">Email address</label>
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                            </div>
                            <div class="form-group mb-4">
                                <label for="inputPassword" class="sr-only">Password</label>
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                            </div>
                            <div class="checkbox mb-4">
                                <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                                </label>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-xs btn-primary" type="submit">Sign in</button>
                            </div>
                        </div>
                        <div class="card-footer text-body-secondary text-center">
                            Copyright &copy; 2025
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}