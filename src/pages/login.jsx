import { useState } from "react";
import React from "react";

import { Link, useNavigate } from "react-router-dom";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // redirect after login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-2xl p-8 w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <input 
          type="email" 
          placeholder="Email" 
          className="border w-full p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Password" 
          className="border w-full p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="bg-purple-600 text-white w-full p-2 rounded hover:bg-purple-700">
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account? <Link to="/signup" className="text-purple-600">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
