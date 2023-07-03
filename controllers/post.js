const Post = require("../models/Post");

const add = async(req, res, next)=> {
    await Post.create(req.body);
    res.redirect("/");
}
const getAllPosts = async(req, res, next)=> {
    const posts = await Post.find().sort({createdAt: -1});
    res.render("index", {posts});
}

module.exports = {
    add,
    getAllPosts
}