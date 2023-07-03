const express = require('express');
const {add} = require("../controllers/post")
const router = express.Router();

console.log("post çalıştı add")
router.get("", (req, res, next)=> {
    res.render("add_post")
})
router.post("",add);

module.exports = router