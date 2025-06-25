import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-placeholder.png"; // Make sure this file exists

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 text-center">
      <h1  className="text-4xl font-bold mb-4">KaamSevak</h1>

      <img
        src={heroImg}
        alt="Hero"
        className="w-64 h-auto mb-4 rounded-xl shadow-lg"
      />

      <p className="text-lg text-gray-600 mb-8">
        Connecting Skilled Workers with Local Employers
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        <Link
          to="/employer-register"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"

        >
          🧑‍💼 Register Employer
        </Link>

        <Link
  to="/worker"
  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
>
  Register as Worker
</Link>


        <Link
          to="/available-workers"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"

        >
          🧑‍🔧 Available Workers
        </Link>

        <Link
          to="/employer-posts"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"

        >
          📋 Job Posts
        </Link>
      </div>
    </div>
  );
}
