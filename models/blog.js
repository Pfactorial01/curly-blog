const { contentType } = require("express");
const mongoose = require("mongoose");
const User = require("./user");
const Comments = require("./comment");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  like_count: {
    default: 0,
    type: Number,
  },
  view_count: {
    default: 0,
    type: Number,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
