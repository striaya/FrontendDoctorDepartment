import { useState } from "react";
import useDepartment from "./hook/useDepartment";

export default function Department() {

  const { departments, loading, addDepartment } = useDepartment();
  const [form, setForm] = useState({
    departmentID: "",
    departmentName: "",
    departmentDesc: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    await addDepartment(form);

    setForm({
    departmentID: "",
    departmentName: "",
    departmentDesc: "",
    });
  };

  const handleReset = () => {
    setForm({
    departmentID: "",
    departmentName: "",
    departmentDesc: "",
    })
  }

  return (
     <div className="container my-4">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="card card-info">
              <div className="card-header">
                Input Department
              </div>
              <div className="card-body">
                <div className="form-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group row mb-4">
                      <label className="col-md-4 col-sm-12 col-xs-12">
                        Department ID
                      </label>
                      <div className="col-md-8 col-sm-12 col-xs-12"></div>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="departmentID"
                          value={form.departmentID}
                          onChange={handleChange}
                        />
                    </div>
                    <div className="form-group row mb-4">
                      <label className="col-md-4 col-sm-12 col-xs-12">
                        Department Name
                      </label>
                      <div className="col-md-8 col-sm-12 col-xs-12"></div>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="departmentName"
                          value={form.departmentName}
                          onChange={handleChange}
                        />
                    </div>
                    <div className="form-group row mb-4">
                      <label className="col-md-4 col-sm-12 col-xs-12">
                        Description
                      </label>
                      <div className="col-md-8 col-sm-12 col-xs-12"></div>
                        <textarea 
                          className="form-control" 
                          name="departmentDesc"
                          value={form.departmentDesc}
                          onChange={handleChange}
                        ></textarea>
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
            <div className="card-header">
              Data
            </div>
            <div className="card-body">

              {loading && <p>Loading...</p>}
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Act</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((item, index) => (
                    <tr key={item.departmentID ?? index}>
                      <td>{item.departmentID}</td>
                      <td>{item.departmentName}</td>
                      <td>{item.departmentDesc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}