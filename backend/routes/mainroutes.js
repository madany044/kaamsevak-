console.log("▶️  mainroutes.js loaded");
// mainroutes.js
const express = require("express");
const router = express.Router();
const Worker = require("../models/Worker");
const Employer = require("../models/Employer"); // ✅ ADD THIS

// Existing worker route
router.post("/register-worker", async (req, res) => {
  try {
    const { name, skill, location, availability } = req.body;
    const newWorker = new Worker({ name, skill, location, availability });
    await newWorker.save();
    res.status(201).json({ message: "✅ Worker registered successfully" });
  } catch (error) {
    console.error("❌ Error saving worker:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ ADD THIS for Employer Registration
router.post("/register-employer", async (req, res) => {
  try {
    const { companyName, contactPerson, phone, city, jobRole, workersNeeded, description } = req.body;
    const newEmployer = new Employer({
      companyName,
      contactPerson,
      phone,
      city,
      jobRole,
      workersNeeded,
      description,
    });
    await newEmployer.save();
    res.status(201).json({ message: "✅ Employer registered successfully" });
  } catch (error) {
    console.error("❌ Error saving employer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/register-worker", async (req, res) => {
  try {
    const { name, skill, location, availability } = req.body;
    const newWorker = new Worker({ name, skill, location, availability });
    await newWorker.save();
    res.status(201).json({ message: "✅ Worker registered successfully" });
  } catch (error) {
    console.error("❌ Error saving worker:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




module.exports = router;
