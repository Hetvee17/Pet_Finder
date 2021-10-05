const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();
require("./db/conn");

dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(cookieParser());

//linked router file and used middleware
app.use(require("./router/auth"));
app.use(require("./router/pet"));

app.get("/contact", (req, res) => {
  //res.cookie("test", ruchi);
  res.send("HELLOW FROM CONTACT");
});
//console.log("test");

app.listen(process.env.PORT, () => {
  console.log("running");
});
