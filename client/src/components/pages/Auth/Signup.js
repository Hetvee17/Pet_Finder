import "../../Signup.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Signup() {
  const History = useHistory();

  // give sign up data to state
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState(
    "https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649__340.jpg "
  );
  let name, value;
  const handleInputs = (e) => {
    if (e.target.name === "avatar") {
      console.log("direct:", e.target.files[0]);
      const reader = new FileReader();
      console.log("showing ava ", avatar);
      // 0= initail 1= proce ssing 2== done
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      //  console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({ ...user, [name]: value });
    }
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    console.log("post data", avatar);
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    if (avatar) {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: JSON.stringify({
          name,
          email,
          password,
          avatar,
        }),
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
        window.alert("Invalid registration");
        console.log("Invalid registration");
      } else if (res.status === 201) {
        window.alert("Registration successful");
        console.log("Registration successful");
        History.push("/login");
      } else {
        window.alert("unknown error");
        console.log("unknown error");
      }
    } else {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
        window.alert("Invalid registration");
        console.log("Invalid registration");
      } else if (res.status === 201) {
        window.alert("Registration successful");
        console.log("Registration successful");
        History.push("/login");
      } else {
        window.alert("unknown error");
        console.log("unknown error");
      }
    }
  };

  return (
    <div className="signupcontainer-fluid signbg">
      <div className="row justify-content-center text-white">
        <div className="col-xs-12 col-sm-6 col-md-3">
          <form
            className="signform-container"
            action="/signup"
            method="POST"
            encType="multipart/form-data"
          >
            <h4 className="text-white text-center"> Signup</h4>
            <hr />
            <div className="text-white form-group">
              <label for="name" className="white">
                Name <sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
                required
              />
              <span className="error_form" id="uname_error_message"></span>
            </div>

            <div className="text-white form-group">
              <label for="email">
                Email <sup>*</sup>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="text-white form-group">
              <label for="password">
                Password <sup>*</sup>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={user.password}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="text-white form-group">
              <label for="image">image</label>
              <input
                type="file"
                className="form-control"
                name="avatar"
                accept="image/*"
                autoComplete="off"
                // value={avatar}
                onChange={handleInputs}
              />
            </div>
            {/* <button id="btn" className=" btn form-control" onClick={uploadData}>
              UploadImage
            </button> */}
            <button
              type="submit"
              onClick={PostData}
              id="btn"
              className=" btn form-control"
            >
              Submit
            </button>
            <p className="para" id="signup-link">
              Already have an account?{" "}
              <Link
                style={{ color: "white", textDecoration: "underline" }}
                id="signupLink"
                to="/login"
              >
                Login
              </Link>{" "}
              here
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
