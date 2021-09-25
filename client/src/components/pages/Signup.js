import "./Signup.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Social from "../Social.js";

function Signup() {
  const History = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn ");
  const container = document.getElementById("container");

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
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
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.error("Invalid registration");
    } else {
      window.alert("Registration successful");
      console.log("Registration successful");
      History.push("/");
    }
  };

  if (signUpButton) {
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
    if (signInButton) {
      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    }
  }
  if (signInButton) {
    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
    if (signUpButton)
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });
  }

  if (signInButton) {
    console.log("signIn");
  }
  return (
    <>
      <br />
      <section className="Signup">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form method="POST" className="signup">
              <h1 className="signup">Create Account</h1>
              <Social />
              <span className="signup">or use your email for registration</span>
              <input
                type="text"
                name="name"
                id="name"
                className="signup"
                placeholder="Name"
                autocomplete="off"
                value={user.name}
                onChange={handleInputs}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="signup"
                placeholder="Email"
                autocomplete="off"
                value={user.email}
                onChange={handleInputs}
              />
              <input
                name="password"
                type="password"
                id="password"
                className="signup"
                placeholder="Password"
                autocomplete="off"
                value={user.password}
                onChange={handleInputs}
              />
              <button id="signup" onClick={PostData} className="signup">
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#" className="signup">
              <h1 className="signup">Sign in</h1>
              <Social />
              <span className="signup">or use your account</span>
              <input
                type="email"
                id="email"
                className="signup"
                placeholder="Email"
              />
              <input
                type="password"
                id="password"
                className="signup"
                placeholder="Password"
              />
              <button className="signup">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="signup">Welcome Back!</h1>
                <p className="signup">
                  To keep connected with us please login with your personal info
                </p>
                <button className="signup ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="signup">Hello, Friend!</h1>
                <p className="signup">
                  Enter your personal details and start journey with to find
                  your loved pet
                </p>
                <button className="signup ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    </>
  );
}

export default Signup;
