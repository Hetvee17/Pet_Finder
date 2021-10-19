const mongoose = require("mongoose");
require("../db/conn");

const petInfoSchema = new mongoose.Schema({
  catagory: { type: String, default: "Dog" },
  breed: { type: String, required: true },
  lifeSpan: { type: String, required: true },
  temprament: { type: String },
  averageWeight: { type: String },
  averageHeight: { type: String },
  imageUrl: { type: String, required: true },
});

const PetInfo = mongoose.model("PETINFO", petInfoSchema);

// PetInfo.create({
//   breed: "Affenpinscher",
//   lifeSpan: "10-12 years",
//   temprament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-Loving",
//   averageWeight: "3-6 Kg",
//   averageHeight: "23 - 29 Cm",
//   imageUrl:
//     "https://images.unsplash.com/photo-1610866443075-9188b628003c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
// });
module.exports = PetInfo;
