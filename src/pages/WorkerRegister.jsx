import React, { useState } from "react";
import axios from "axios";

export default function WorkerRegister() {
  const [formData, setFormData] = useState({
    name: "",
    skill: "",
    phone: "",
    location: "",
    availability: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/worker-register", formData);
      setMessage("✅ Worker registered successfully!");
      setFormData({
        name: "",
        skill: "",
        phone: "",
        location: "",
        availability: "",
      });
    } catch (err) {
      setMessage("❌ Error registering worker.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
        👷 Register as a Worker
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="text"
            name="skill"
            placeholder="Skill (e.g. Mason, Electrician)"
            value={formData.skill}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location (e.g. Bengaluru)"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        >
          <option value="">Select Availability</option>
          <option value="Available Now">Available Now</option>
          <option value="Within a Week">Within a Week</option>
          <option value="Not Available">Not Available</option>
        </select>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
        >
          Submit
        </button>

        {message && <p className="text-center text-sm text-green-600">{message}</p>}
      </form>
    </div>
  );
}
