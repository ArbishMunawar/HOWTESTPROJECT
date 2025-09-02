import React from "react";
import { Users, FileText, Book, Layers } from "lucide-react";
import { useAdmin } from "../../../context/AdminContext";

const AdminDashboard = () => {
  const { dashData, loading } = useAdmin();
  if (loading) {
    return <p className="p-6 text-lg">Loading dashboard data...</p>;
  }
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <section className="grid gap-6 md:grid-cols-4">
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center space-x-4">
            <Users className="text-blue-500" size={32} />
            <div>
              <h2 className="text-lg font-semibold">Authors</h2>
              <p className="text-2xl font-bold">{dashData?.authors ?? 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center space-x-4">
            <FileText className="text-green-500" size={32} />
            <div>
              <h2 className="text-lg font-semibold">Articles</h2>
              <p className="text-2xl font-bold"> {dashData?.articles ?? 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center space-x-4">
            <Book className="text-purple-500" size={32} />
            <div>
              <h2 className="text-lg font-semibold">Books</h2>
              <p className="text-2xl font-bold"> {dashData?.books ?? 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center space-x-4">
            <Layers className="text-orange-500" size={32} />
            <div>
              <h2 className="text-lg font-semibold">Categories</h2>
              <p className="text-2xl font-bold"> {dashData?.categories ?? 0}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
