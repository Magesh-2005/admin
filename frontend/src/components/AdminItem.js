import React from "react";

const AdminItem = ({ admin, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{admin.id}</td>
      <td>{admin.name}</td>
      <td>{admin.email}</td>
      <td>{admin.phone}</td>
      <td>{admin.role}</td>
      <td>{admin.status}</td>
      <td>
        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(admin)}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(admin.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminItem;
