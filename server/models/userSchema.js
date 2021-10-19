const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: [20, "Max length is 20"],
    required: [true, "Please enter Name"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    valide: [validator.isEmail, "please enter valid"],
  },
  password: { type: String, required: true, minlength: 5, selector: false },
  avatar: {
    public_id: { type: String,default:"default pfp" },
    url: {
      type: String,
      default:"https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649__340.jpg "
    },
  },

  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
  resetPasswordToken: String,
  resetPasswordExpire: Date,
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

// userSchema.pre("save", async function (next) {
//   if (!this.inModify("password")) {
//     next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
// });
module.exports = User;
