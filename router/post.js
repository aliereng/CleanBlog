const express = require('express');
const Post = require("../models/Post")
const router = express.Router();


router.get('/:id', async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post
  })
});

module.exports = router;
