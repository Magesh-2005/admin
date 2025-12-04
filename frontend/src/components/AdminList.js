import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminItem from "./AdminItem";

const AdminList = () => {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    status: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const API_URL = "https://admin-tvbh.onrender.com";

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    const res = await axios.get(API_URL);
    setAdmins(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`${API_URL}/${form.id}`, form);
      setIsEditing(false);
    } else {
      await axios.post(API_URL, form);
    }
    setForm({ id: null, name: "", email: "", password: "", phone: "", role: "", status: "" });
    fetchAdmins();
  };

  const handleEdit = (admin) => {
    setForm(admin);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchAdmins();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Admin Service Management</h2>

      {/* Add / Edit Form */}
      <form className="card p-3 mb-4" onSubmit={handleSubmit}>
        <h5>{isEditing ? "Edit Admin" : "Add New Admin"}</h5>
        <div className="row">
          <div className="col-md-6 mb-2">
            <input type="text" name="name" className="form-control" placeholder="Name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-2">
            <input type="email" name="email" className="form-control" placeholder="Email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-2">
            <input type="password" name="password" className="form-control" placeholder="Password" value={form.password} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-2">
            <input type="text" name="phone" className="form-control" placeholder="Phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-2">
            <input type="text" name="role" className="form-control" placeholder="Role" value={form.role} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-2">
            <input type="text" name="status" className="form-control" placeholder="Status" value={form.status} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          {isEditing ? "Update Admin" : "Add Admin"}
        </button>
      </form>

      {/* Admin Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <AdminItem key={admin.id} admin={admin} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
