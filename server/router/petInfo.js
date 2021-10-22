const express = require("express");
const router = express.Router();
require("../db/conn");
const Apifeatures = require("../utils/apiFeatures");
const PetInfo = require("../models/petInfoSchema");

router.get("/Breed", async (req, res) => {
  try {
    const apiFeatures = new Apifeatures(PetInfo.find(), req.query)
      .search()
      .filter();
    let petInfos = await apiFeatures.query;
    let filteredPetCount = petInfos.length;
    console.log(filteredPetCount);

    if (petInfos) {
      res.status(200).json({
        success: true,
        petInfos,
        filteredPetCount,
      });
    } else {
      res.status(422).json({ success: true, error: "no pets" });
    }
  } catch (err) {
    res.status(422).json({ error: "Error while getting all pet" });
  }
});

router.post("/petInfo/add", async (req, res) => {
  const { breed, lifeSpan, imageUrl } = req.body;
  //req.body.user = req.userID;
  if ((!breed, !lifeSpan, !imageUrl)) {
    return res
      .status(422)
      .json({ error: "please fill the fields properly..!!" });
  }

  try {
    const petInfo = await PetInfo.create(req.body);
    if (petInfo) {
      console.log("breed Added");
      res.status(201).send(petInfo);
    } else {
      console.log("Failed to add Breed");
      res.status(425).json({ error: "Failed to add Breed" });
    }
  } catch (err) {
    console.log("catch err from pet add");
    res.status(422).json({ error: "Error" });
  }
});

module.exports = router;
