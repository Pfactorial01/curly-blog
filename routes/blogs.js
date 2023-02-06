const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const Comment = require("../models/comment");

// Required Features

// Get Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Create Blog
router.post("/", async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Co-author Blog
router.patch("/:blog_id", getBlog, async (req, res) => {
  if (req.body.title != null) {
    res.blog.title = req.body.title;
  }
  if (req.body.content != null) {
    res.blog.content = res.blog.content + req.body.content;
  }
  if (req.body.author != null) {
    res.blog.author.push(req.body.author);
  }
  if (req.body.like === "true") {
    res.blog.like_count = res.blog.like_count + 1;
  }
  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Comment on Blog
router.post("/:blog_id", async (req, res) => {
  const comment = new Comment({
    blog: req.params.blog_id,
    content: req.body.content,
    user_info: req.body.user_info,
  });
  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get one Blog
router.get("/:blog_id", getBlog, async (req, res) => {
  res.blog.view_count = res.blog.view_count + 1;
  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getBlog(req, res, next) {
  let blog;
  try {
    blog = await Blog.findById(req.params.blog_id);
    if (blog == null) {
      return res.status(404).json({ message: "Blog not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.blog = blog;
  next();
}

module.exports = router;
