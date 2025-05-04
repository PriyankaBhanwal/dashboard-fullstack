const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");

// Initialize the app and load environment variables
dotenv.config();
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Use routes
app.use("/api/auth", authRoutes); // User registration and login routes
app.use("/api/dashboard", dashboardRoutes); // Dashboard (protected) route

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
