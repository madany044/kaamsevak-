import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AvailableWorkers() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/workers");
        setWorkers(res.data);
      } catch (error) {
        console.error("❌ Error fetching workers:", error);
      }
    };

    fetchWorkers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Available Workers</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workers.map((worker) => (
          <div key={worker._id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{worker.name}</h3>
            <p>🔧 Skill: {worker.skill}</p>
            <p>📍 Location: {worker.location}</p>
            <p>📅 Availability: {worker.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
