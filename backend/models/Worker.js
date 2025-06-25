const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: String,
  skill: String,
  location: String,
  availability: String,
});

module.exports = mongoose.model("Worker", workerSchema);
