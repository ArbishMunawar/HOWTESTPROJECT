import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../../context/AppContext";

const AdminCategories = () => {
  const { category, getCategoriesData } = useContext(AppContext);

  useEffect(() => {
    getCategoriesData(); 
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Categories</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search categories..."
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
            <th>Slug</th>
            <th>Active</th>
            <th>Created</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {category?.map((category) => (
            <tr key={category._id} className="border-b">
              <td>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-10 h-10 rounded"
                />
              </td>
              <td>{category.name}</td>
              <td>{category.slug}</td>
              <td>{category.isActive ? "Active" : "Inactive"}</td>
              <td>{new Date(category.createdAt).toLocaleDateString()}</td>
              {/* <td>
                <button className="px-2 py-1 bg-blue-500 text-white rounded">
                  Edit
                </button>
                <button className="px-2 py-1 bg-red-500 text-white rounded ml-2">
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCategories;
