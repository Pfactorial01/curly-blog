const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Create User
router.post("/", async (req, res) => {
  const user = new User({
    full_name: req.body.full_name,
    email: req.body.email,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
