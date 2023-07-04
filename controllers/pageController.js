const Post = require("../models/Post");

const getHomePage = async (req, res)=> {
    const posts = await Post.find().sort({createdAt: 'desc'});
    res.render('index', {
        posts
    })
}
const getAboutPage = (req,res)=> {
    res.render('about');
}
const getAddPostPage = (req,res)=> {
    res.render('add_post');
}
const getUpdatePage = async(req,res)=> {
    const post = await Post.findById(req.params.id);
    res.render('update_post', {
        post
    })
}
module.exports = {
    getHomePage,
    getAboutPage,
    getAddPostPage,
    getUpdatePage
}