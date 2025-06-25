const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRoutes = require("./routes/mainroutes");



const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", mainRoutes); // ✅ prefixing all routes with /api



// DB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/kaamsevak", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Base route
app.get("/", (req, res) => {
  res.send("KaamSevak backend running");
});

// TEMP sanity‑check route  ─────────────────────────────
app.post("/api/test", (req, res) => {
  res.json({ ok: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

