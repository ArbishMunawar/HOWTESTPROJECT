import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Book,
  Layers,
  ChevronDown,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { useAdmin } from "../../../context/AdminContext";

const AdminSidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const { isAdmin, logout } = useAdmin();

  if (!isAdmin) {
    return null;
  }

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Authors",
      path: "/admin/authors",
      icon: <Users size={20} />,
      sublinks: [
        { name: "View All", path: "/admin/authors" },
        { name: "Add New Author", path: "/admin/new-author" },
      ],
    },
    {
      name: "Articles",
      path: "/admin/articles",
      icon: <FileText size={20} />,
      sublinks: [
        { name: "View All", path: "/admin/articles" },
        { name: "Create Article", path: "/admin/new-article" },
      ],
    },
    {
      name: "Books",
      path: "/admin/books",
      icon: <Book size={20} />,
      sublinks: [
        { name: "View All", path: "/admin/books" },
        { name: "Add New Book", path: "/admin/new-book" },
      ],
    },
    {
      name: "Categories",
      path: "/admin/category",
      icon: <Layers size={20} />,
      sublinks: [
        { name: "View All", path: "/admin/category" },
        { name: "Create Category", path: "/admin/new-category" },
      ],
    },
  ];

  const handleToggle = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.sublinks ? (
              <button
                onClick={() => handleToggle(item.name)}
                className={`flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-gray-800 transition ${
                  location.pathname.startsWith(item.path) ? "bg-gray-800" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {openMenu === item.name ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
            ) : (
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition ${
                  location.pathname.startsWith(item.path) ? "bg-gray-800" : ""
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            )}

            {item.sublinks && openMenu === item.name && (
              <div className="ml-8 mt-2 space-y-1">
                {item.sublinks.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className={`block px-2 py-1 rounded hover:bg-gray-700 transition ${
                      location.pathname === sub.path ? "bg-gray-700" : ""
                    }`}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600 bg-blue-600 transition w-full"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
