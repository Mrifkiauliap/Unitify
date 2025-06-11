const express = require("express");
const router = express.Router();
const controller = require("../modules/chat/controllers/index.js");

router.get("/daftar-chat", controller.daftar_chat);

module.exports = router;
