const express = require("express");
const router = express.Router();
const Apifeatures = require("../utils/apiFeatures");
require("../db/conn");
const Pet = require("../models/petSchema");
const Authenticate = require("../middleware/authenticate");
const cloudinary = require("cloudinary");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//add pet
router.post(
  "/pets/add",
  Authenticate,
  catchAsyncErrors(async (req, res) => {
    const {
      name,
      age,
      location,
      breed,
      color,
      catagory,
      vaccinated,
      trained,
      description,
    } = req.body;
    let donatorUser = req.userID;
    //    console.log(donatorUser);
    //console.log("body : ", req.body);
    try {
      const myCloud = await cloudinary.v2.uploader.upload(req.body.images, {
        folder: "petImages",
        width: 150,
        crop: "scale",
      });
      if (!myCloud) {
        console.log("not updated");
        return res
          .status(423)
          .json({ success: false, error: "image Not Uploaded Correctly" });
      } else {
        console.log("url:", myCloud.secure_url, myCloud.public_id);
      }
      //req.body.user = req.userID;
      if ((!name, !age, !location, !breed, !color, !catagory)) {
        return res.status(423).json({
          success: false,
          error: "please fill the fields properly..!!",
        });
      }
      try {
        const pet = await Pet.create({
          name,
          age,
          donatorUser,
          location,
          breed,
          color,
          catagory,
          vaccinated,
          trained,
          description,
          images: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          },
        });
        if (pet) {
          console.log("Pet Added");
          res.status(201).json({ pet, success: true });
        } else {
          console.log("Failed to add pet");
          res.status(425).json({ success: false, error: "Failed to add Pet" });
        }
      } catch (err) {
        console.log("error while adding to db", err);
        res.status(422).json({ success: false, error: "Failed" });
      }
    } catch (err) {
      console.log("error while uploading", err);
      res.status(422).json({ success: false, error: "Failed" });
    }
  })
);
//get all product
router.get("/Uploadedpets", Authenticate, async (req, res) => {
  //return next(new ErrorHander("this is temp error", 500));
  try {
    //console.log(req.userID);
    const apiFeatures = new Apifeatures(
      Pet.find({ donatorUser: req.userID }),
      req.query
    )
      .search()
      .filter();
    let pets = await apiFeatures.query;
    let filteredPetCount = pets.length;
    if (pets) {
      console.log(filteredPetCount);
      res.status(200).json({
        success: true,
        pets,
        filteredPetCount,
      });
    } else {
      res.status(422).json({ success: true, error: "no pets" });
    }
  } catch (err) {
    res.status(422).json({ error: "Error while getting all pet" });
  }
});

//uploaded pet
router.get("/pets", async (req, res) => {
  //return next(new ErrorHander("this is temp error", 500));
  try {
    const resultPerPage = 8;
    const petsCount = await Pet.countDocuments();
    const apiFeatures = new Apifeatures(Pet.find(), req.query)
      .search()
      .filter();
    let pets = await apiFeatures.query;
    let filteredPetCount = pets.length;
    apiFeatures.pagination(resultPerPage);
    pets = await apiFeatures.query;
    if (pets) {
      console.log(filteredPetCount);
      res.status(200).json({
        success: true,
        petsCount,
        pets,
        resultPerPage,
        filteredPetCount,
      });
    } else {
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
    const petsCount = await Pet.countDocuments();
    const pets = await Pet.findById(req.params.id);
    res.status(200).json({ success: true, pets, petsCount });
  } catch (err) {
    res.status(422).json({ error: "Error while getting pet " });
  }
});

module.exports = router;
