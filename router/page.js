const express = require('express');
const router = express.Router();
const { getHomePage, getAboutPage, getAddPostPage } = require('../controllers/pageController');

router.get('/', getHomePage);
router.get('/about', getAboutPage);
router.get("/add-post", getAddPostPage);
module.exports = router;
