const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Register route
// POST /register - User registration
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "Email is already taken" });
  }

  user = new User({
    username,
    email,
    password: password,
  });
  try {
    await user.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});
// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid credential password" });
  }

  // Generate JWT token
  const payload = { userId: user.id, username: user.username };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
});

module.exports = router;
