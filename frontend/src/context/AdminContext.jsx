import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [dashData, setDashData] = useState(false);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const checkAdmin = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/api/v1/admin/login`, {
        withCredentials: true,
      });
      if (res.data.success) {
        setIsAdmin(true);
        setIsAdmin(res.data.admin);
      } else {
        setIsAdmin(false);
      }
    } catch (err) {
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  const getDashData = async () => {
    if (!isAdmin) return;
    try {
      const { data } = await axios.get(`${backendUrl}/api/v1/admin/dashboard`, {
        withCredentials: true,
      });

      if (data.success) {
        console.log("DASH DATA:", res.data);
        setDashData(data.dashData);
        //  toast.error(data.message)
      } else {
        toast.error(error.message);
      }
    } catch (error) {}
  };

  const logout = async () => {
    try {
      await axios.post(
        `${backendUrl}/api/v1/admin/logout`,
        {},
        { withCredentials: true }
      );
      setIsAdmin(false);
      setDashData(null);
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    checkAdmin();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      getDashData();
    }
  }, [isAdmin]);
  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        checkAdmin,
        dashData,
        getDashData,
        loading,
        logout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};