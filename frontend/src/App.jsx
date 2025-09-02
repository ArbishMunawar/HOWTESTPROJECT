import { Outlet, useLocation } from "react-router";
import Navbar from "./ui/components/Common/Navbar.jsx";
import Footer from "./ui/components/Common/Footer.jsx";
import AdminSidebar from "./ui/components/Common/AdminSidebar.jsx";
import { useAdmin } from "./context/AdminContext.jsx";
import AdminLoginPage from "./ui/pages/Admin/AdminLogin.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Root() {
  const { isAdmin, loading } = useAdmin();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  if (loading) return <p>Loading...</p>; 

  if (isAdminRoute) {
    if (isAdmin) {
      return (
        <>
          <ToastContainer />
          <div className="flex min-h-screen">
            <AdminSidebar />
            <div className="flex-1 bg-gray-50 p-4">
              <Outlet />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <ToastContainer />
          <AdminLoginPage />
        </>
      );
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="layout">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
