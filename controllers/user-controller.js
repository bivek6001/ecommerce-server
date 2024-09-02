const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user-model.js'); // Assuming you have a User model
const jwt=require("jsonwebtoken");
const signup=  async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please provide name, email, and password', success: false });
        }

        // Check if the email already exists
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use', success: false});
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Respond with success
        res.status(201).json({ message: 'User created successfully', success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', success: false });
    }
};

const signin= async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password', success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password', success: false });
    }

    const token= jwt.sign({_id:user._id},process.env.JWT_SECRET);

    
    res.header("token",token);
      const loggedinUser= await User.findOne({email}).select("-password")
    
     res.json({ message: 'Login successful', success: true,loggedinUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message, success: false });
  }
}



module.exports ={signup,signin}