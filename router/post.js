const express = require("express");
const {createNewPost, getPostById, updatePost, removePostById} = require("../controllers/postController");
const { getUpdatePage } = require('../controllers/pageController');
const router = express.Router();

router.get('/:id', getPostById)
router.post('/create', createNewPost);
router.get('/update/:id', getUpdatePage)
router.put('/update/:id', updatePost)
router.delete('/delete/:id', removePostById)
module.exports = router;