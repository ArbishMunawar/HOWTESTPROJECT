import  React from "react";
import { useNavigate } from "react-router-dom";
import { api_base_url } from "../../../helper";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
     navigate("/login");}
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch(`${api_base_url}/user/signup`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //          credentials: "include",
  //       body: JSON.stringify({
  //         username,
  //         name,
  //         email,
  //         password,
  //       }),
  //     });

  //     const data = await res.json();
  //     console.log(data);

  //     if (data.success) {
  //       alert("Signup successful!");
  //       navigate("/login");
  //     } else {
  //       alert(data.msg || "Signup failed!");
  //     }
  //   } catch (err) {
  //     console.error("Error during signup:", err);
  //     alert("Something went wrong.");
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              User Name
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your User Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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
              placeholder="........."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
