const { contentType } = require("express");
const mongoose = require("mongoose");
const User = require("./user");
const Blog = require("./blog");

const commentSchema = new mongoose.Schema({
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
  content: {
    type: String,
    required: true,
  },
  user_info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
