import React from "react";
import { Link } from "react-router-dom";
import { api_base_url } from "../../../helper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
     navigate("/");
  
  }
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`${api_base_url}/user/login`, {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         localStorage.setItem("user", JSON.stringify(data.user));
//         localStorage.setItem("token", data.token);
// // console.log("Login successful:", data);
//         setMessage("Login successful!");
//         navigate("/");
//       } else {
//         setMessage(data.msg || "Login failed.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setMessage("Something went wrong.");
//     }
//   };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="......."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            Don’t have an account?{" "}
            <Link to={"signup"} className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
