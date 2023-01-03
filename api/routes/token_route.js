const express = require("express");
const router = express.Router();

const TokenController = require("../controller/token_controller");

router.get("/refreshToken",TokenController.refreshToken);

module.exports = router;