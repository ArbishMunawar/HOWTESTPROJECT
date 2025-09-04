import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../../context/AppContext";

const AdminArticles = () => {
  const { articles, getArticlesData } = useContext(AppContext);

  useEffect(() => {
    getArticlesData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Articles</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search articles..."
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
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {articles.length > 0 ? (
            articles.map((article) => (
              <tr key={article._id} className="border-b">
                <td>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-10 h-10 rounded"
                  />
                </td>
                <td>{article.title}</td>
                <td>{article.author?.name || "Unknown"}</td>
                <td>
                  {article.category && article.category.length > 0
                    ? article.category.map((cat) => cat.title).join(", ")
                    : "N/A"}
                </td>

                <td>
                  {article.tags && article.tags.length > 0
                    ? article.tags.join(", ")
                    : "N/A"}
                </td>
                <td>{article.isActive ? "Active" : "Inactive"}</td>
                <td>{new Date(article.createdAt).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-4">
                No articles found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminArticles;
