import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="text-xl font-bold text-green-700">KaamSevak</div>
      <div className="space-x-4 text-sm md:text-base">
        <Link to="/" className="hover:text-green-700 font-medium">Home</Link>
        <Link to="/register-worker" className="hover:text-green-700 font-medium">Register Worker</Link>
        <Link to="/available-workers" className="hover:text-green-700 font-medium">Workers</Link>
        <Link to="/employer-register" className="hover:text-green-700 font-medium">Register Employer</Link>
        <Link to="/employer-posts" className="hover:text-green-700 font-medium">Job Posts</Link>
      </div>
    </nav>
  );
}
