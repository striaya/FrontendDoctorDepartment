import { useState } from "react";
import useDepartment from "./hook/useDepartment";

export default function Department() {

  const { department, loading, addDepartment } = useDepartment();
  const [form, setForm] = useState({
    department_id: "",
    department_name: "",
    department_description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDepartment(form);

    setForm({
      department_id: "",
      department_name: "",
      department_description: "",
    });
  };

  const handleReset = () => {
    setForm({
      department_id: "",
      department_name: "",
      department_description: "",
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
                      <div className="col-md-8 col-sm-12 col-xs-12">
                        <input 
                          type="text" 
                          className="form-control" 
                          name="department_id"
                          value={form.department_id}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-4">
                      <label className="col-md-4 col-sm-12 col-xs-12">
                        Department Name
                      </label>
                      <div className="col-md-8 col-sm-12 col-xs-12">
                        <input 
                          type="text" 
                          className="form-control" 
                          name="department_name"
                          value={form.department_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-4">
                      <label className="col-md-4 col-sm-12 col-xs-12">
                        Description
                      </label>
                      <div className="col-md-8 col-sm-12 col-xs-12">
                        <textarea 
                          className="form-control" 
                          name="department_description"
                          value={form.department_description}
                          onChange={handleChange}
                        ></textarea>
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
                  {department.map((item, index) => (
                    <tr key={item.department_id ?? index}>
                      <td>{item.department_id}</td>
                      <td>{item.department_name}</td>
                      <td>{item.department_description}</td>
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