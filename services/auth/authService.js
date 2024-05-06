const jwt = require("jsonwebtoken");

const secretToken =
  "qwertyuiodoasjrfbheskfhdsxcvboiswueorghbfo3urbn23o9h9hjklzxcvbnm";

// Function to verify a JWT token
function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretToken, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}

// Middleware function to check for a valid token and set user data on request object
function verifyMiddleware(req, res, next) {
  const token = req.headers["x-access-token"]?.split("Split")[1];
  if (!token) {
    return res.json({ status: "error" });
  }

  verifyToken(token)
    .then((decoded) => {
      req.user = { id: decoded.id, username: decoded.username };
      next();
    })
    .catch((err) => {
      res.json({
        status: "error",
        isAuthorized: false,
        message: "Invalid Token",
      });
    });
}

module.exports = {
  verifyToken,
  verifyMiddleware,
};
