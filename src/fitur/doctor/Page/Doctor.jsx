import { useState } from "react";
import useDoctor from "./hook/useDoctors";

export default function DoctorPage(){
    const { doctors, loading, addDoctor } = useDoctor();
    const [form, setForm] = useState({
        doctorID: "",
        name: "",
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

        await addDoctor(form);

        setForm({
            doctorID: "",
            name: "",
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
            name: "",
            gender: "",
            phone: "",
            address: "",
            email: "",
            bio: "",
        });
    }

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
                                        <input className="form-control"/>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Name
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12"></div>
                                        <input className="form-control"/>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Gender
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <select className="form-control">
                                                <option>--Option--</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Phone
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12"></div>
                                        <input className="form-control"/>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Address
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12"></div>
                                        <input className="form-control"/>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Email
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                        <input className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Bio
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <textarea className="form-control "></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                    <div className="col-md-12">
                                      <input type="submit" value="Save" className="btn btn-primary" /> 
                                      <input type="reset" value="Reset" className="btn btn-danger" />
                                     </div>
                                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <div className="card card-default">
                    <div className="card-header">
                        Data
                    </div>
                    <div className="card-body">
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
                                    <th>Act</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}