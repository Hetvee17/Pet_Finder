const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
    trim: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
});

//generating token

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this.id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    //console.log(token);
    return token;
  } catch (err) {
    console.log(err);
  }
};
const User = mongoose.model("USER", userSchema);

module.exports = User;
