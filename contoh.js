import { useState } from "react";
import useDepartment from "./hook/useDepartment";

export default function Department() {

  const { departments, loading, addDepartment } = useDepartment();

  const [form, setForm] = useState({
    departementId: "",
    name: "",
    description: "",
  });

  // handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDepartment(form);

    // reset form
    setForm({
      departementId: "",
      name: "",
      description: "",
    });
  };

  return (
    <div className="container my-4">

      {/* FORM */}
      <div className="card mb-4">
        <div className="card-header">
          Input Department
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Department ID</label>
              <input
                name="departementId"
                className="form-control"
                value={form.departementId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Department Name</label>
              <input
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Description</label>
              <textarea
                name="description"
                className="form-control"
                value={form.description}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary me-2">
              Save
            </button>

            <button
              type="reset"
              className="btn btn-danger"
              onClick={() =>
                setForm({
                  departementId: "",
                  name: "",
                  description: "",
                })
              }
            >
              Reset
            </button>

          </form>
        </div>
      </div>


      {/* TABLE */}
      <div className="card">

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
                <th>Description</th>
              </tr>
            </thead>

            <tbody>

              {departments.map((item) => (
                <tr key={item.department_id}>
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
  );
}
