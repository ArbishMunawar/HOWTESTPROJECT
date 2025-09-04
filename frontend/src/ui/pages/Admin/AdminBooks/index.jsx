import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../../context/AppContext";

const AdminBooks = () => {
  const { books, getBooksData } = useContext(AppContext);

  useEffect(() => {
    getBooksData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Books</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search books..."
          className="border p-2 rounded w-1/3"
        />
        <select className="border p-2 rounded">
          <option value="">All Status</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Created</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id} className="border-b">
              <td>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-10 h-10 rounded"
                />
              </td>
              <td>{book.title}</td>
              <td>{book.author?.name || "Unknown"}</td>
              <td>
                {book.category && book.category.length > 0
                  ? book.category.map((cat) => cat.title).join(", ")
                  : "N/A"}
              </td>
              <td>{book.isActive ? "Available" : "Unavailable"}</td>
              <td>{new Date(book.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBooks;
