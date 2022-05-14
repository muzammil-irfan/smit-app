const express = require("express");
const Admin = require("../models/Admin");
const router = express.Router();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/signup", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);

    res.send("Registered Successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) {
    res.status(404).send("Not found");
  }
  if (password === admin.password) {
    const token = jwt.sign({user:admin}, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({token});
  } else {
    res.status(404).send("Not found");
  }
});

module.exports = router;
