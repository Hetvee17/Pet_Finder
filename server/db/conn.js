const mongoose = require("mongoose");
//const dotenv = require('dotenv');
//dotenv.config({ path: './config.env' });
//const DB = process.env.DATABASE;

const DB =
  "mongodb+srv://admin:admin@cluster0.bji5i.mongodb.net/PetFinder?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true, 
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
  })
  .then(() => {
    console.log("Connect success!");
  })
  .catch((err) => console.log("not commented"));
