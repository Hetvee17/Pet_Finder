const express = require("express");
const router = express.Router();
const Apifeatures = require("../utils/apiFeatures");
require("../db/conn");
const Pet = require("../models/petSchema");
const User = require("../models/userSchema");
//add pet
router.post("/pets/new", async (req, res) => {
  const { name, catagory, location, age, breed, color } = req.body;
  if ((!name, !catagory, !location, !age, !breed, !color)) {
    return res
      .status(422)
      .json({ error: "please fill the fields properly..!!" });
  }
  try {
    const pet = await Pet.create(req.body);
    if (pet) {
      res.status(201).send({ message: "Added pet succesfully" });
    } else {
      res.status(422).json({ error: "Failed to add Pet" });
    }
  } catch (err) {
    res.status(422).json({ error: "Error" });
  }
});
//get all product
router.get("/Pets", async (req, res) => {
  try {
    const apiFeatures = new Apifeatures(Pet.find(), req.query.keyword).search();
    const pets = await apiFeatures.query;
    if (pets) res.status(200).json({ success: true, pets });
    else {
      res.status(422).json({ success: true, error: "no pets" });
    }
  } catch (err) {
    res.status(422).json({ error: "Error while getting all pet" });
  }
});
//update pet
router.put("/pets/:id/update", async (req, res) => {
  let pet = await Pet.findById(req.params.id);
  if (!pet) {
    return res.status(422).json({ success: false, message: "Pet not found" });
  }
  try {
    pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true,
      useFindAndModify: false,
    });
    if (pet) res.status(201).json({ success: true, pet });
    else {
      res.status(422).json({ success: false, error: "can not update" });
    }
  } catch (err) {
    res.status(422).json({ error: "error while update" });
  }
});

//delete
router.delete("/pets/:id/delete", async (req, res) => {
  let pet = await Pet.findById(req.params.id);
  if (!pet) {
    return res.status(422).json({ success: false, message: "Pet not found" });
  }
  try {
    await pet.remove();
    if (!pet)
      res.status(201).json({ success: true, message: "Delete succesfully" });
    else {
      res.status(422).json({ success: false, error: "can not delete" });
    }
  } catch (err) {
    res.status(422).json({ error: "error while update" });
  }
});

router.get("/pet/:id", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.status(200).json({ success: true, pet });
  } catch (err) {
    res.status(422).json({ error: "Error while getting pet " });
  }
});

module.exports = router;
