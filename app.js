require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://pfactorial:new_pass*123@cluster0.leidy8g.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

const blogsRouter = require("./routes/blogs");
app.use("/blogs", blogsRouter);
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

module.exports = app;
