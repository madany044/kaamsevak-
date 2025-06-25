import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EmployerPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/employer-posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
      <h2>Employer Job Posts</h2>
      {posts.length === 0 ? (
        <p>No job posts found.</p>
      ) : (
        posts.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ddd", padding: 16, borderRadius: 6, marginBottom: 12 }}>
            <strong>{p.companyName}</strong><br/>
            Contact: {p.contactPerson}<br/>
            Phone: {p.phone}<br/>
            City: {p.city}<br/>
            Role: {p.jobRole}<br/>
            Needed: {p.workersNeeded}<br/>
            {p.description}
          </div>
        ))
      )}
    </div>
  );
  return (
  <div className="page">
    <h2>Employer Job Posts</h2>
    {posts.length === 0 ? (
      <p>No job posts found.</p>
    ) : (
      posts.map((p) => (
        <div key={p._id} className="card">
          <h3>{p.companyName}</h3>
          <p><strong>Contact:</strong> {p.contactPerson}</p>
          <p><strong>Phone:</strong> {p.phone}</p>
          <p><strong>City:</strong> {p.city}</p>
          <p><strong>Role:</strong> {p.jobRole}</p>
          <p><strong>Needed:</strong> {p.workersNeeded}</p>
          <p>{p.description}</p>
        </div>
      ))
    )}
  </div>
);

}
