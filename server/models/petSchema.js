const mongoose = require("mongoose");
require("../db/conn");

const petSchema = new mongoose.Schema({
  name: { type: String, default:"Fido" },
  catagory: { type: String, default:"Dog" },
  age: { type: String, default:"Dontknow" },
  breed: { type: String, default:"Dontknow" },
  location: { type: String, default:"" },
  color: { type: String, default:"black" },
  vaccinated: { type: Number, default: 0 },
  trained: { type: Number, default: 0 },
  likes: { type: Number, defult: 0 },
  description: { type: String ,default:""},
  email: { type: String ,required: true},
  images: [
    {
      public_id: { type: String, default: "Default" },
      url: {
        type: String,
        default:
          "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1150&q=80",
      },
    },
  ],
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
