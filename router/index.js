const express = require('express');
const router = express.Router();
const home = require("./home");
const about = require("./about");
const post = require("./post");

router.use("/", home);
router.use("/about", about);
router.use("/post", post);

module.exports = router