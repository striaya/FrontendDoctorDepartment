import { useState } from "react";
import useSchedule from "./hook/useSchedule";
import useDoctor from "../../doctor/Page/hook/useDoctor";
import useDepartment from "../../department/Page/hook/useDepartment";

export default function SchedulePage() {
const {
  schedules = [],
  loading = false,
  addSchedule
} = useSchedule([]);
    const {doctors} = useDoctor();
    const {departments} = useDepartment();

    const [ form, setForm ] =  useState({   
        scheduleID: "",
        doctorID: "",
        departmentID: "",
        scheduleDate: "",
        startTime: "",
        endTime: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();

  const payload = {
    doctorID: form.doctorID,
    departmentID: form.departmentID,
    date: form.scheduleDate,
    startTime: form.startTime,
    endTime: form.endTime
  };

  await addSchedule(payload);
};
    const handleReset = () => {
        setForm({
        scheduleID: "",
        doctorID: "",
        departmentID: "",
        scheduleDate: "",
        startTime: "",
        endTime: "",
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
                                            Schedule ID
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input 
                                            type="text"
                                            className="form-control"
                                            name="scheduleID"
                                            value={form.scheduleID}
                                            onChange={handleChange}
                                            required/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Doctor ID
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <select
                                            type="text"
                                            className="form-control"
                                            name="doctorID"
                                            value={form.doctorID}
                                            onChange={handleChange}
                                            required>
                                            <option value="">Pilih Doctor</option>
                                            {doctors.map((doc) => (
                                                <option key={doc.doctor_id} value={doc.doctor_id}>
                                                    {doc.doctorName}
                                                </option>
                                            ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Department ID
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <select 
                                            type="text"
                                            className="form-control"
                                            name="departmentID"
                                            value={form.departmentID}
                                            onChange={handleChange}
                                            required>
                                            <option value="">Pilih Department</option>
                                            {departments.map((doc) => (
                                                <option key={doc.departmentID} value={doc.departmentID}>
                                                    {doc.departmentName}
                                                </option>
                                            ))}
                                            </select>
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
                                            name="scheduleDate"
                                            value={form.scheduleDate}
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
                                            name="startTime"
                                            value={form.startTime}
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
                                            name="endTime"
                                            value={form.endTime}
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
                  <th>ScheduleID</th>
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
                  schedules.map((item, index) => (
                    <tr key={index}>
                      <td>{item.scheduleID}</td>
                      <td>{item.doctorID}</td>
                      <td>{item.departmentID}</td>
                      <td>{item.scheduleDate}</td>
                      <td>{item.startTime}</td>
                      <td>{item.endTime}</td>
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