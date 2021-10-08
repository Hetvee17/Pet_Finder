import "../../Signup.css";
import { Link} from "react-router-dom";
import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../../../App.js";

export default function Logout() {
  const { dispatch } = useContext(UserContext);

  //promises
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        //history.push("/login", { replace: true });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="signcontainer-fluid signbg">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-6 col-md-3">
          <form className="signform-container" method="POST">
            <h4 className="text-center text-white"> Logged out</h4>
            <hr />
            <div className="form-group">
              <h5 className="para  text-warning">
                Thanks for Using Petfinder ... <br />
                see you later
              </h5>
            </div>
            <hr />
            <p className="para" id="signup-link">
              Login again?{" "}
              <Link
                style={{ color: "white", textDecoration: "underline" }}
                id="loginLink"
                to="/login"
              >
                <span className="text-danger"> Login</span>
              </Link>{" "}
              here
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
