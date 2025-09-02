import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../../context/AppContext";

const AdminAuthors = () => {
  const { authors, getAuthorsData } = useContext(AppContext);

  useEffect(() => {
    getAuthorsData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Authors</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search authors..."
          className="border p-2 rounded w-1/3"
        />
        <select className="border p-2 rounded">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Image</th>
            <th>Name</th>
            <th>Profession</th>
            <th>Verified</th>
            <th>Active</th>
            <th>Created</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id} className="border-b">
              <td>
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td>{author.name}</td>
              <td>{author.profession}</td>
              <td>{author.isVerified ? "Yes" : "No"}</td>
              <td>{author.isActive ? "Active" : "Inactive"}</td>
              <td>{new Date(author.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAuthors;
