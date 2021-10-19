const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();
const cloudinary = require("cloudinary");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
require("./db/conn");

dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));
cloudinary.config({
  cloud_name: process.env.CLOUDNARY_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});
console.log(process.env.CLOUDNARY_NAME);
//linked router file and used middleware
app.use(require("./router/auth"));
app.use(require("./router/pet"));
app.use(require("./router/petInfo"));
app.get("/contact", (req, res) => {
  //res.cookie("test", ruchi);
  res.send("HELLOW FROM CONTACT");
});
//console.log("test");

app.listen(process.env.PORT, () => {
  console.log("running");
});
