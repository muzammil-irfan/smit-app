const express = require("express");
const Course = require("../models/Course");
const router = express.Router();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
// const JWT_SECRET = 'smit'

//To get All courses
router.get('/',async(req,res)=>{
    try {
        const course = await Course.find();
        res.json(course)
      } catch (err) {
        console.log(err);
        res.status(400).json({ err });
      }  
})

//To create courses
router.post("/create", async (req, res) => {
  const { name, token, date } = req.body;
  try {
    const data = {
      name,
      date,
    };
    jwt.verify(token, JWT_SECRET, (err, decode) => {
      if (err) {
        console.log(err);
      }
      const adminId = decode.user._id;
      data["creator_id"] = adminId;
    });
    const course = await Course.create(data);

    res.send("Registered Successfully");

  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
});

module.exports = router;
