const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
require("./db/conn");

dotenv.config({ path: "./config.env" });

const User = require("./models/userSchema");

app.use(express.json());
//linked router file and used middleware
app.use(require("./router/auth"));

//middleware
const middleware = (req, res, next) => {
  console.log("hello from middleware");
  next();
};
app.get("/contact", (req, res) => {
  res.cookie("test", "token");
  res.send("HELLOW FROM CONTACT");
});
console.log("test");

app.listen(process.env.PORT, () => {
  console.log("running");
});
