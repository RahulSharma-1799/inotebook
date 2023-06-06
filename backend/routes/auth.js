const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require("express-validator");

//create a new user "api/auth/createuser"
router.post("/createuser", [
    body("name",'Enter a valid name').isLength({ min: 3 }),
    body("email",'Enter a valid email').isEmail(),
    body("password",'Enter atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        //check if user already exists or not
      if (user) {
        return res
          .status(400)
          .json({ error: "a user with that email already exists" });
      }
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    };

});

module.exports = router;