const routes = require('express').Router();
const authController = require("../../controllers/auth.controllers");

// Dashboard User Login / Signin
routes.get("/login", authController.login);

// Verify Dashboard User Login
routes.get("/verifyLogin", authController.verify, authController.verifyToken);

module.exports = routes;