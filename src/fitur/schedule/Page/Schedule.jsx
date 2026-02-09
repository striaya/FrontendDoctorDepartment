import { useState } from "react";
import useSchedule from "./hook/useSchedule";

export default function SchedulePage() {
const {
  schedules = [],
  loading = false,
  addSchedule
} = useSchedule([]);
    const [ form, setForm ] =  useState({   
        schedule_id: "",
        doctor_id: "",
        department_id: "",
        schedule_date: "",
        schedule_start: "",
        schedule_end: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();

        await addSchedule(form);
        setForm({
            schedule_id: "",
            doctor_id: "",
            department_id: "",
            schedule_date: "",
            schedule_start: "",
            schedule_end: "",
        });
    }

    const handleReset = () => {
        setForm({
            schedule_id: "",
            doctor_id: "",
            department_id: "",
            schedule_date: "",
            schedule_start: "",
            schedule_end: "",
        });
    }

    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="card card-info">
                        <div className="card-header">
                            Input Doctor's Schedules
                        </div>
                        <div className="card-body">
                            <div className="form-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Doctor ID
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input 
                                            type="text"
                                            className="form-control"
                                            name="doctor_id"
                                            value={form.doctor_id}
                                            onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Department ID
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input 
                                            type="text"
                                            className="form-control"
                                            name="department_id"
                                            value={form.department_id}
                                            onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Date
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input 
                                            type="date"
                                            className="form-control"
                                            name="schedule_date"
                                            value={form.schedule_date}
                                            onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Start
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input 
                                            type="time"
                                            className="form-control"
                                            name="schedule_start"
                                            value={form.schedule_start}
                                            onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            End
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input type="time"
                                            className="form-control"
                                            name="schedule_end"
                                            value={form.schedule_end}
                                            onChange={handleChange}/>
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
                  <th>DoctorID</th>
                  <th>DepartmentID</th>
                  <th>Tanggal</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(schedules) && schedules.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No doctors available
                    </td>
                  </tr>
                ) : (
                  schedules.map((doc, index) => (
                    <tr key={index}>
                      <td>{doc.doctor_id}</td>
                      <td>{doc.department_id}</td>
                      <td>{doc.schedule_date}</td>
                      <td>{doc.schedule_start}</td>
                      <td>{doc.schedule_end}</td>
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