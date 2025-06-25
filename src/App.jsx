import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home";
import RegisterWorker from "./pages/WorkerRegister";
import AvailableWorkers from "./pages/AvailableWorkers";
import EmployerRegister from "./pages/EmployerRegister";
import EmployerPosts from "./pages/EmployerPosts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-worker" element={<RegisterWorker />} />
        <Route path="/available-workers" element={<AvailableWorkers />} />
        <Route path="/employer-register" element={<EmployerRegister />} />
        <Route path="/employer-posts" element={<EmployerPosts />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
