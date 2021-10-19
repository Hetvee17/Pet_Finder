const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../models/userSchema");
const cloudinary = require("cloudinary");
const authenticate = require("../middleware/authenticate");
router.get("/", (req, res) => {
  res.send("Hello from server router");
});

//----------------------------------
//            async await register
//----------------------------------
router.post("/register", async (req, res) => {
  console.log(req.body.name);
  // try {
  //   console.log(req.body.name);
  //   // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
  //   folder: "avatars",
  //   upload_preset: "pet-finder",
  //   public_id: `${Date.now()}`,
  //   width: 150,
  //   crop: "scale",
  // });
  // if (myCloud) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(422)
      .json({ error: "please fill the fields properly..!!" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != password) {
      return res.status(422).json({ error: "Password is incorrect" });
    }

    const user = new User({
      name,
      email,
      password,
    });
    user.save();
    res
      .status(201)
      .json({ success: "true", message: "User saved successfully", user });
  } catch (err) {
    console.log(err);
    res.status(422).json({ success: "failed" });
  }

  // } else {
  //   console.log("insight try block");
  // }
  // } catch (err) {
  //   console.log("avatar failed", err);
  //   res.status(422).json({ success: "failed" });
  // }
  console.log("hello from registered");
});

//LOGIN ROUTE

router.post("/signin", async (req, res) => {
  let token;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ error: "please fill the fields ..!!" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 172800000),
        httpOnly: true,
      });
      console.log(password);
      console.log(userLogin.password);
      if (password != userLogin.password) {
        res
          .status(404)
          .json({ success: false, message: "passwords do not match" });
      } else {
        res.status(202).json({
          error: "signed successfully",
          token,
          userLogin,
        });
      }
    } else {
      res.status(404).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log("Failed");
    res.status(500).json({ error: "user signin failed" });
  }
});

router.get("/UserProf", authenticate, (req, res) => {
  //console.log(req.rootUser);
  res.send(req.rootUser);
});

//getuser
router.get("/UserProf/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(422).json({ error: "Error while getting user " });
  }
});
//update
router.put("/UserProf/update/:id", async (req, res) => {
  console.log("hello from update");
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.status(422).json({ success: false, message: "user not found" });
  }
  try {
    user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true,
      useFindAndModify: false,
    });
    if (user) res.status(201).json({ success: true, user });
    else {
      res.status(422).json({ success: false, error: "can not update" });
    }
  } catch (err) {
    res.status(422).json({ error: "error while update" });
  }
});
router.get("/logout", (req, res) => {
  console.log("hello from logout");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logged out");
});
module.exports = router;
