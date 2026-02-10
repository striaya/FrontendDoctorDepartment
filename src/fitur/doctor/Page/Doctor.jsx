import { useState } from "react";
import useDoctor from "./hook/useDoctor";

export default function DoctorPage(){
    const { doctors, loading, addDoctor } = useDoctor();
    const [form, setForm] = useState({
        doctorID: "",
        doctorName: "",
        gender: "",
        phone: "",
        address: "",
        email: "",
        bio: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", form);
        await addDoctor(form);

        setForm({
            doctorID: "",
            doctorName: "",
            gender: "",
            phone: "",
            address: "",
            email: "",
            bio: "",
        });
    }

    const handleReset = () => {
        setForm({
            doctorID: "",
            doctorName: "",
            gender: "",
            phone: "",
            address: "",
            email: "",
            bio: "",
        });
    }

    // useEffect(() => {
    //     fetchDoctors();
    // }, [fetchDoctors])

    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="card card-info">
                        <div className="card-header">
                            Input Doctor
                        </div>
                        <div className="card-body">
                            <div className="form-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Doctor ID
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12"></div>
                                        <input type="text" 
                                        className="form-control"
                                        name="doctorID"
                                        value={form.doctorID}
                                        onChange={handleChange}/>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Name
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12"></div>
                                        <input 
                                        type="text"
                                        className="form-control"
                                        name="doctorName"
                                        value={form.doctorName}
                                        onChange={handleChange}/>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Gender
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <select
                                            className="form-control"
                                            name="gender"
                                            value={form.gender}
                                            onChange={handleChange}
                                            >
                                                <option value="">--Option--</option>
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Phone
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12"></div>
                                        <input 
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Address
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12"></div>
                                        <input 
                                        type="text"
                                        className="form-control"
                                        name="address"
                                        value={form.address}
                                        onChange={handleChange}/>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Email
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                        <input 
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Bio
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <textarea 
                                            className="form-control "
                                            name="bio"
                                            value={form.bio}
                                            onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <div className="col-md-12">
                                    <input type="submit" value="Save" className="btn btn-primary"/> 
                                    <button
                                       type="button"
                                       onClick={handleReset}
                                        className="btn btn-danger ms-2"
                                    >
                                     Reset
                                      </button>
                                     </div>
                                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
    <div className="my-4">
      <div className="card card-default">
        <div className="card-header">Data</div>
        <div className="card-body">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Bio</th>
                </tr>
              </thead>
              <tbody>
                {doctors.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No doctors available
                    </td>
                  </tr>
                ) : (
                  doctors.map((doc, index) => (
                    <tr key={index}>
                      <td>{doc.doctorID}</td>
                      <td>{doc.doctorName     }</td>
                      <td>{doc.gender}</td>
                      <td>{doc.phone}</td>
                      <td>{doc.address}</td>
                      <td>{doc.email}</td>
                      <td>{doc.bio}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  </div>
    );
}