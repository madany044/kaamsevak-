const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: { type: String, required: true },
  jobType: { type: String, required: true },
  location: { type: String, required: true },
  notes: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);
