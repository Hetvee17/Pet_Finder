import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../layouts/Loader";
import { registerPet } from "../../../actions/petAction";
export default function DonatePet() {
  const dispatch = useDispatch();
  const History = useHistory();
  const { loading, error, isAdded } = useSelector((state) => state.pet);
  const [pet, setPet] = useState({
    name: "",
    catagory: "",
    age: "",
    breed: "",
    location: "",
    color: "",
    vaccinated: "",
    trained: "",
    description: "",
  });
  const [images, setImage] = useState();
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setPet({ ...pet, [name]: value });
  };
  const handleFile = (e) => {
    console.log("image :", e.target.files[0]);
    const reader = new FileReader();
    // 0= initail 1= proce ssing 2== done
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const AddPet = async (e) => {
    e.preventDefault();
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
    } = pet;
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("age", age);
    myForm.set("location", location);
    myForm.set("breed", breed);
    myForm.set("color", color);
    myForm.set("catagory", catagory);
    myForm.set("vaccinated", vaccinated);
    myForm.set("trained", trained);
    myForm.set("description", description);
    myForm.set("images", images);
    dispatch(registerPet(myForm));
  };
  useEffect(() => {
    if (isAdded) {
      window.alert("Thanks for donate :)");

      History.push("/UserProfile");
    }
  }, [dispatch, isAdded]);
  return (
    <>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <>
          <form
            style={{ border: "1px", solid: "#ccc" }}
            id="pets"
            encType="multipart/form-data"
          >
            <div className="form-container">
              <h1>Donate Pet</h1>
              <p>Please fill in this form to add the pet for donation.</p>
              <span class="text-muted text-danger"> * required field</span>
              <hr />
              <label for="name">
                <b>Pet Name:</b> <span class="text-muted text-danger"> *</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={pet.name}
                onChange={handleInputs}
                placeholder="Enter petname"
                className="petText"
              />
              <label for="age">
                <b>Pet Age:</b>
              </label>
              <input
                type="text"
                value={pet.age}
                onChange={handleInputs}
                placeholder="Petage"
                id="age"
                name="age"
              />
              <div class="row">
                <div class="col-4 col-md-4 col-sm-4 cl-lg-4 col-xl-4">
                  <div class="row">
                    <div class="col">
                      <label>
                        <b>Vaccinated</b>
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="vaccinated"
                          id="vaccinated"
                          value="Yes"
                          onChange={handleInputs}
                        />
                        <label class="form-check-label" for="vaccinated">
                          <b>Yes</b>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="vaccinated"
                          id="vaccinated"
                          value="No"
                          onChange={handleInputs}
                        />
                        <label class="form-check-label" for="vaccinated">
                          <b>No</b>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* vaccinate over */}
                <div class="col-4 col-md-4 col-sm-4 cl-lg-4 col-xl-4">
                  <div class="row">
                    <div class="col">
                      <label>
                        <b>Trained</b>
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="trained"
                          id="trained"
                          value="Yes"
                          onChange={handleInputs}
                        />
                        <label class="form-check-label" for="trained">
                          <b>Yes</b>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="trained"
                          id="trained"
                          value="No"
                          onChange={handleInputs}
                        />
                        <label class="form-check-label" for="trained">
                          <b>No</b>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* train over */}
                <div class="col-4 col-md-4 col-sm-4 cl-lg-4 col-xl-4">
                  <div class="row">
                    <div class="col">
                      <label>
                        <b>Category</b>
                        <span class="text-muted text-danger"> *</span>
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="catagory"
                          id="catagory"
                          value="cat"
                          onChange={handleInputs}
                          required
                        />
                        <label class="form-check-label" for="category">
                          <b>Cat</b>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="catagory"
                          id="catagory"
                          value="dog"
                          onChange={handleInputs}
                          required
                        />
                        <label class="form-check-label" for="category">
                          <b>Dog</b>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {/* catagory over */}
              <label for="breeds">
                <b>Breeds</b>
                <span class="text-muted text-danger"> *</span>
              </label>
              <input
                type="text"
                class="petText"
                value={pet.breed}
                onChange={handleInputs}
                placeholder="Enter petbreed"
                id="breed"
                name="breed"
                required
              />

              <label for="location">
                <b>Location</b>
                <span class="text-muted text-danger"> *</span>
              </label>
              <input
                type="text"
                class="petText"
                value={pet.location}
                onChange={handleInputs}
                placeholder="Enter Location"
                id="location"
                name="location"
                onFocus="geolocate()"
                required
              />

              <label for="color">
                <b>Color</b>
              </label>
              <input
                type="text"
                class="petText"
                value={pet.color}
                onChange={handleInputs}
                placeholder="Enter color"
                id="color"
                name="color"
              />

              <label for="description">
                <b>description</b>
              </label>
              <textarea
                rows="4"
                style={{ width: "100%" }}
                id="description"
                name="description"
                value={pet.description}
                onChange={handleInputs}
                placeholder="Write something interesting about your pet.."
              ></textarea>

              <label for="File">
                <b>Select Image</b>
                <span class="text-muted"> *</span>
              </label>
              <input
                type="file"
                name="images"
                accept="image/*"
                onChange={handleFile}
                required
              />
              <div class="clearfix">
                <button type="submit" class="signupbtn" onClick={AddPet}>
                  Add
                </button>
                <button type="button" class="cancelbtn">
                  <Link to="/">cancle</Link>
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}
