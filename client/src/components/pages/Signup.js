import "./Signup.css";
import React from "react";
import Social from "../Social.js";

function Signup() {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  if (signUpButton) {
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }
  return (
    <>
      <br />
      <section className="Signup">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#" className="signup">
              <h1 className="signup">Create Account</h1>
              <Social />
              <span className="signup">or use your email for registration</span>
              <input
                type="text"
                id="username"
                className="signup"
                placeholder="Name"
              />
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
              <button className="signup">Sign Up</button>
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
