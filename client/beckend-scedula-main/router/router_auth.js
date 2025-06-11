const express = require("express");
const router = express.Router();
const controller = require("../modules/auth/controllers/index.js");

router.post("/login", controller.login);

module.exports = router;
