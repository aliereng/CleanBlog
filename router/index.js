const express = require('express');
const router = express.Router();
const page = require('./page');
const post = require('./post')
router.use('/', page);
router.use('/post', post)
module.exports = router;
