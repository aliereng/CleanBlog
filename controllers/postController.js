const Post = require("../models/Post");

const createNewPost = async(req, res, next)=> {
    await Post.create(req.body);
    res.redirect("/");
}
const getPostById = async(req, res)=> {
    const post = await Post.findById(req.params.id);
    res.render('post', {
        post
    })
}
const getAllPosts = async(req, res, next)=> {
    const posts = await Post.find().sort({createdAt: -1});
    res.render("index", {posts});
}
const updatePost = async (req, res)=> {
    await Post.findByIdAndUpdate(req.params.id, {
        createdAt: Date.now(),
        ...req.body
    }, {
        new:true, 
        runValidators:true}
    );
    res.redirect('/');
}
const removePostById = async(req, res, next)=> {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
}
module.exports = {
    createNewPost,
    getPostById,
    getAllPosts,
    updatePost,
    removePostById
}