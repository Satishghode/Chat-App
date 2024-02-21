import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { response } from "express";

// signup function
export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password don't matach" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // Generating JWT token
      generateTokenAndSetCookie(newUser, res);

      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: " Invalid user Data " });
    }
  } catch (error) {
    console.log("Error in signUp Controller", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};

// login function
export const login = async (req, res) => {
  try {
    const { username, password } = req.body; // get the data from the request body.
    const user = await User.findOne({ username }); // get the user data from the request body and pass it to the callback function. if user is present then the callback will be returned user object. 
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      res.status(400).json({ error : "Invalid credentials" })
    }

    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      gender: user.gender,
      profilePic: user.profilePic,
    });

  } catch (error) {
    console.log("Error in Login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// logout function
export const logout = (req, res) => {
  try {
    res.clearCookie("jwt","");
    res.status(200).json({ message : "logged out Successfully" })
  } catch (error) {
    console.log("Error in Logout Controller", error.message);
    res.status(500).json({ error: "Internal server error"});
  }
};
