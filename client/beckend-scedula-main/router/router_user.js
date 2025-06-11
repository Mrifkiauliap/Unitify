const express = require("express");
const router = express.Router();
const controller = require("../modules/user/controllers/index.js");

router.get("/daftar-user", controller.daftar_user);

module.exports = router;
