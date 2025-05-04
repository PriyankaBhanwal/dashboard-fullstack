const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Middleware to verify token
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}

// Protected route
router.get("/", authMiddleware, (req, res) => {
  res.json({ msg: `Welcome to the dashboard, user ${req.user}` });
});

module.exports = router;
