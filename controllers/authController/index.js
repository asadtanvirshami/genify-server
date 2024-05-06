const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const db = require("../models");

//*****Services import*****\\
const authService = require("../../services/auth/authService");
const userService = require("../../services/user/userService");

exports.login = async (req, res) => {
  const { password, email } = req.headers;
  try {
    const user = await userService.authenticateUser(email, password);
    if (user) {
      const generateAuthToken = userService.generateAuthToken(user);
      return res
        .status(404)
        .json({ message: "user-logged-in", token: generateAuthToken });
    }
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.verify = async (req, res) => {
  try {
    const verifiedUser = authService.verifyMiddleware();
    if (verifiedUser) {
      return res
        .status(404)
        .json({ message: "user-verifed", payload: verifiedUser });
    }
    if (!verifiedUser) {
      return res.status(404).json({ message: "user-not-verifed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
