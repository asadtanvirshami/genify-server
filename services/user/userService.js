const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const db = require("../models"); // Assuming models include User

const secretToken =
  "qwertyuiodoasjrfbheskfhdsxcvboiswueorghbfo3urbn23o9h9hjklzxcvbnm";

// Function to authenticate user based on email and password
async function authenticateUser(email, password) {
  const user = await db.Users.findOne({ where: { email, password } });
  return user;
}

// Function to generate a JWT token for a user
function generateAuthToken(user) {
  const payload = {
    username: `${user.firstName} ${user.lastName}`,
    loginId: user.id,
  };
  const token = jwt.sign(payload, secretToken, { expiresIn: "12h" });
  return token;
}

module.exports = {
  authenticateUser,
  generateAuthToken,
};
