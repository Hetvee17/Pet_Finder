import "../../Signup.css";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../../../App.js";

export default function Login() {
  const { dispatch } = useContext(UserContext);

  const History = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 404 || res.status === 500 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login successfully");
      console.log("successfull");
      History.push("/");
    }
  };
  return (
    <div className="signcontainer-fluid signbg">
      <div className="row justify-content-center text-white">
        <div className="col-xs-12 col-sm-6 col-md-3">
          <form className="signform-container" method="POST">
            <h4 className="text-center"> Login</h4>
            <hr />
            {/* {{#if msg}} 
                    <div className="alert alert-warning" role="alert">
                    Wrong username or password
                    </div>
                    {{/if}} */}
            <div className="form-group">
              <label className="email">
                email <sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label for="password">
                Password <sup>*</sup>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              id="btn"
              className="btn  form-control"
              onClick={loginUser}
            >
              Submit
            </button>
            <p className="para" id="signup-link">
              Don't have an account?{" "}
              <Link
                style={{ color: "white", textDecoration: "underline" }}
                id="signupLink"
                to="/signup"
              >
                Sign Up
              </Link>{" "}
              here
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
