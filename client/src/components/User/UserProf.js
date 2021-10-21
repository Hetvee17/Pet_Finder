// import { Link } from "react-router-dom";
import { getUserPet } from "../../actions/petAction";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import "../modernForm.css";
import TitleButton from "./TitleButton";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/Loader";
import { useAlert } from "react-alert";
import Cards from "../layouts/Cards";
export default function UserProf() {
  const alert = useAlert();
  const History = useHistory();
  const [userData, setUserData] = useState({
    email: "notDefind",
    name: "notDefind",
    avatar: {
      public_id: "notDefind",
      url: "notDefind",
    },
    _id: "",
  });

  const { pets, filteredPetCount, loading, error } = useSelector(
    (state) => state.userPets
  );
  const dispatch = useDispatch();

  const callUserProf = async () => {
    try {
      const res = await fetch(
        "/UserProf",
        {
          method: "GET",
          header: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
        []
      );
      const data = await res.json();
      //console.log(data);
      setUserData(data);
      if (!res.status === 200 || !data) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      //   console.log(error);
      History.push("/Login");
    }
  };
  useEffect(() => {
    callUserProf();
    if (error) {
      return alert.error(error);
    }
    dispatch(getUserPet());
  }, [dispatch]); //we cant use async fun in useEffect so defined it outside

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container-fluid" id="wrapper-container">
            <div id="currentSection"></div>
            <div className="container-fluid  mb-5 ">
              {/* top image */}
              <Profile userData={userData} />
              <div className="row " id="Uploads">
                <TitleButton Title="Uploaded Pet" />
                {pets && pets.map((pet) => <Cards pet={pet} />)}
              </div>
            </div>
          </div>
          {/* modal from ofr update user info */}
          <div
            className="modal"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update Info</h5>&nbsp;
                  <span className="text-muted text-danger">
                    {" "}
                    * required field
                  </span>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body" id="userUpdateModalForm">
                  <form
                    id="userProfile"
                    style={{ border: "1px", solid: "#ccc" }}
                    enctype="multipart/form-data"
                  >
                    <div className="form-container">
                      <label for="Name">
                        <b>Name</b>
                        <span className="text-muted text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="updateUserInfo"
                        placeholder="Enter  name..."
                        id="name"
                        name="name"
                        required
                      />
                      <label for="Email">
                        <b>Email</b>
                        <span className="text-muted text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="updateUserInfo"
                        placeholder="Enter Email..."
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                  </form>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="updateInfo"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* profile modal and pet mmodal add nai kri hju */}
        </>
      )}
    </>
  );
}