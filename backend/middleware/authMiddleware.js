
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

  // Get JWT from cookie
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No token provided"
    });
  }

  try {
    // Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: ["HS256"] }
    );

    // Store user ID
    req.userId = decoded.userId;

    // Continue to the route
    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};

module.exports = authMiddleware;
