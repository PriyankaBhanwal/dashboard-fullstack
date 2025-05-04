// middleware/auth.js
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Get token from the request header
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId; // Attach user id to the request object
    next(); // Continue to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
