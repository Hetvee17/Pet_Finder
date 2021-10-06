import React, { useState, Link } from "react";
import { useHistory } from "react-router-dom";
export default function DonatePet() {
  const History = useHistory();
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
    email: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setPet({ ...pet, [name]: value });
  };

  const AddPet = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      age,
      location,
      breed,
      color,
      catagory,
      vaccinated,
      trained,
      description,
    } = pet;
    const res = await fetch("/pets/add", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        catagory,
        age,
        breed,
        location,
        color,
        vaccinated,
        trained,
        description,
        email,
      }),
    });
    const data = await res.json();
    if (res.status === 425 || !data) {
      window.alert("Failed to add Pet Try again later!");
      console.error("Failed to add Pet Try again later!");
    } else if (res.status === 402) {
      window.alert("please Enter Registered email!!");
      console.error("please Enter Registered email!!");
    } else if (res.status === 422) {
      window.alert("please fill the fields properly..!!");
      console.error("please fill the fields properly..!!");
    } else if (res.status === 201) {
      window.alert("Pet added successful");
      console.log("Pet added successful");
      History.push("/UserProf");
    } else {
      window.alert("unknown error");
      console.log("unknown error");
    }
  };
  return (
    <>
      <form method="post" style={{ border: "1px", solid: "#ccc" }} id="pets">
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
                      value="1"
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
                      id="vaccinated"
                      value="0"
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
                      value="1"
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
                      value="0"
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
          <label for="email">
            <b>Email</b>
            <span class="text-muted text-danger"> *</span>
          </label>
          <input
            type="text"
            class="petText"
            value={pet.email}
            onChange={handleInputs}
            placeholder="Enter email"
            id="email"
            name="email"
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

          {/* <label for="File">
            <b>Select Image</b>
            <span class="text-muted"> *</span>
          </label>
          <input type="file" id="File" name="File" required /> */}
          <div class="clearfix">
            <button type="submit" class="signupbtn" onClick={AddPet}>
              Add
            </button>
            <button type="button" class="cancelbtn">
              Cancek
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
