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
    const res = await axios.get(`${backendUrl}/api/v1/admin/login`, { withCredentials: true });
    if (res.data.success) {
      setIsAdmin(true);
      // setIsAdmin(res.data.admin);
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
    try {
      const { data } =await axios.get(`${backendUrl}/api/v1/admin/dashboard`, { withCredentials: true });

      if (data.success) {
        setDashData(data.dashData)
        //  toast.error(data.message)
      }else{
        toast.error(error.message)
      }
    } catch (error) {}
  };

  useEffect(() => {
    checkAdmin();
    getDashData()
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, checkAdmin, dashData,getDashData, loading }}>
      {children}
    </AdminContext.Provider>
  );
};
