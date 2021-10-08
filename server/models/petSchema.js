const mongoose = require("mongoose");
require("../db/conn");

const petSchema = new mongoose.Schema({
  name: { type: String, default: "Fido" },
  catagory: { type: String, default: "Dog" },
  age: { type: String, default: "Dontknow" },
  breed: { type: String, default: "Dontknow" },
  location: { type: String, default: "" },
  color: { type: String, default: "black" },
  vaccinated: { type: String, default: "No" },
  trained: { type: String, default: "No" },
  likes: { type: Number, defult: 0 },
  description: { type: String, default: "" },
  email: { type: String, required: true },
  images: {
    public_id: { type: String, default: "sample pic" },
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1150&q=80",
    },
  },
  //  user: { type: mongoose.Schema.ObjectId, ref: "User", required: "true" },
  createdAt: { type: Date, default: Date.now },
});
//     numsOfReviews: { type: String, default: 0 },
//     reviews: [{
//         name: { type: String, required: true },
//         comment: { type: String, required: true },
//         createdAt:{ type: Date, default: Date.now}
//   }],
//owner: { type: String, required: true}
const Pet = mongoose.model("PET", petSchema);
// Pet.create({
//   name:"jack", catagory:"Dog",age:3,breed:"pug",details:"vaccinated"
// })
module.exports = Pet;
