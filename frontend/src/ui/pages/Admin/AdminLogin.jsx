
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAdmin } from "../../../context/AdminContext";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAdmin } = useAdmin();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${backendUrl}/api/v1/admin/login`,
        { email, password },
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsAdmin(true);
        navigate("/admin/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
