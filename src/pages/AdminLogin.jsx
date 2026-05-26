import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import hero from "../assets/hero.jpg";

function AdminLogin() {

  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {

    const isLoggedIn =
      localStorage.getItem("adminLoggedIn");

    if (isLoggedIn === "true") {
      navigate("/admin");
    }

  }, [navigate]);

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      adminId === "admin" &&
      password === "kakaji123"
    ) {

      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      navigate("/admin");

    } else {

      setError("Invalid Admin ID or Password");

    }

  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      <img
        src={hero}
        alt="Admin Login"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-xl bg-white/10 backdrop-blur-xl border border-gold/30 rounded-[40px] p-10 md:p-14 shadow-2xl"
      >

        <div className="text-center mb-12">

          <p className="uppercase tracking-[6px] text-gold mb-4">
            Management Portal
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
            Admin Login
          </h1>

          <p className="text-gray-200 text-lg leading-8">
            Securely access the Kakaji Management Dashboard
            to manage venue reservations and bookings.
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-8"
        >

          <div>

            <label className="block text-cream font-semibold mb-3">
              Admin ID
            </label>

            <input
              type="text"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              placeholder="Enter Admin ID"
              className="w-full px-5 py-4 rounded-2xl bg-white border border-white/20 outline-none focus:border-gold"
            />

          </div>

          <div>

            <label className="block text-cream font-semibold mb-3">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-5 py-4 rounded-2xl bg-white border border-white/20 outline-none focus:border-gold"
            />

          </div>

          {error && (

            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-2xl">

              {error}

            </div>

          )}

          <button
            type="submit"
            className="w-full bg-gold text-brown py-5 rounded-full text-lg font-bold hover:bg-[#E6B325] transition duration-300 shadow-xl"
          >
            Access Management Portal
          </button>

        </form>

      </motion.div>

    </section>
  );
}

export default AdminLogin;