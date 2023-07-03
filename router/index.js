const express = require('express');
const router = express.Router();
const home = require("./home");
const about = require("./about");
const post = require("./post");
const add_post = require("./add_post");

router.use("/", home);
router.use("/about", about);
router.use("/post", post);
router.use("/add-post", add_post);

module.exports = router