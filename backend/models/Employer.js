// backend/models/Employer.js
const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  jobRole: {
    type: String,
    required: true,
  },
  workersNeeded: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("Employer", employerSchema);
