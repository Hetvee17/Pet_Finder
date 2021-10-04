import "../modernForm.css";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserProf() {
  const History = useHistory();
  const [userData, setUserData] = useState(
    {
      email: "notDefind",
      name:"notDefind"
    }
  );

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
      console.log(data);
      setUserData(data);
      if (!res.status === 200 || !data) {
        const error = new Error(res.error);
        throw error;
      }
      //  History.push("/UserProfile");
    } catch (error) {
      console.log(error);
      History.push("/Login");
    }
  };
  useEffect(() => {
    callUserProf();
  }, []); //we cant use async fun in useEffect so defined it outside

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <>
      <div class="container-fluid" id="wrapper-container">
        <div id="currentSection"></div>
        <div class="container-fluid  mb-5 ">
          {/* top image */}
          <div class="row mb-5">
            <div class="col-12 col-lg-12 col-xl-12 col-sm-12 col-md-12">
              <div class="jumbotron-fluid">
                {/* user profile image */}
                <form method="GET">
                  <div
                    className="prof-image card-img-top"
                    style={{
                      backgroundImage:
                        'url("https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649__340.jpg ")',
                    }}
                  >
                    <div class="profile-tab text-center">
                      <p>
                        <i class="fa fa-envelope mr-1 email" />
                        &nbsp;
                        {userData.email}
                      </p>
                      <p>
                        <i class="fa fa-user mr-1 username" />
                        &nbsp;
                        {userData.name}
                      </p>
                      <p>
                        <a
                          data-toggle="modal"
                          data-target="#exampleModal"
                          href="#modal"
                          class="text-white"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Edit profile"
                        >
                          <i class="fa fa-pencil text-white" /> Edit
                        </a>
                      </p>
                      <p class="mb-5">
                        <a
                          data-toggle="modal"
                          data-target="#exampleModalUpload"
                          href="#Upload"
                          class="text-white mb-5"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Change profile"
                        >
                          <i class="fa fa-upload mr-1 text-white"></i>Upload
                        </a>
                      </p>
                    </div>
                    {/**Profile tab */}
                  </div>
                </form>
                {/**Profile pic*/}
              </div>
            </div>
          </div>
          {/* row end */}
          <div class="row " id="Uploads">
            <div class="col-12 col-lg-12 col-md-12 col-sm-12 ">
              <div class="row text-center">
                <div class="col-12 col-lg-12 col-md-12 col-sm-12 ">
                  <div
                    class="alert alert-primary py-3 mt-5"
                    style={{ backgroundColor: "#231942", color: "white" }}
                  >
                    Uploaded Pets
                  </div>
                </div>
              </div>
            </div>
            {/* sec col */}
            <div class="col-12 col-lg-12 col-md-12 col-sm-12">
              <div class="row">
                <div class="col-md-4 col-lg-4 col-xl-3 col-sm-6 col-12 mt-3">
                  <div class="card  petAddedCard">
                    <div
                      className="images card-img-top inner"
                      style={{
                        backgroundImage:
                          'url(("https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649__340.jpg ")',
                      }}
                    >
                      <button
                        className="btn btn-outline-secondary pet-pics"
                        data-toggle="modal"
                        data-target="#petsModalUpload"
                      >
                        <i class="fa fa-camera" />
                      </button>
                      {/* aya database mathi uploaded pets */}
                    </div>
                    {/* image end */}
                    {/* card body start */}
                    <div class="card-body">
                      <h5 class="card-title">name,bread</h5>
                      <p class="card-text">
                        trained vaccinated
                        {/* here add if trained nd vc of not */}
                      </p>
                      <p class="card-text">
                        <i class="fa fa-address-book-o" aria-hidden="true" />
                        &nbsp Location
                        {/* here add location from backnd */}
                      </p>
                    </div>
                    {/* card body end */}
                    {/* card footer start */}
                    <div class="card-footer">
                      <span class="like-container">
                        <button type="submit" class="btn hvr-glow like-click">
                          <i class="fa fa-heart" style={{ color: "red" }} />
                        </button>
                        <span class="likes">5{/* here add like count */}</span>
                      </span>
                      <a
                        href="#petProfile"
                        class="btn more btn-outline-primary ml-3"
                      >
                        <i class="fa fa-info px-1" />
                      </a>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
          {/* row upload ends */}
          {/* row liked starts */}
          <div class="row " id="Liked">
            <div class="col-12 col-lg-12 col-md-12 col-sm-12 ">
              <div class="row text-center">
                <div class="col-12 col-lg-12 col-md-12 col-sm-12 ">
                  <div
                    class="alert alert-primary py-3 mt-5"
                    style={{ backgroundColor: "#231942", color: "white" }}
                  >
                    {" "}
                    Liked Pets
                  </div>
                </div>
              </div>
            </div>
            {/* like uploaded here add liked pet info  */}
            <div class="col-12 col-lg-12 col-md-12 col-sm-12">
              <div class="row">
                <div class="col-md-4 col-lg-4 col-xl-3 col-sm-6 col-12 mt-3">
                  <div class="card  petAddedCard">
                    <div
                      className="images card-img-top inner"
                      style={{
                        backgroundImage:
                          'url(("https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649__340.jpg ")',
                      }}
                    >
                      <button
                        className="btn btn-outline-secondary pet-pics"
                        data-toggle="modal"
                        data-target="#petsModalUpload"
                      >
                        <i class="fa fa-camera" />
                      </button>
                      {/* aya database mathi uploaded pets */}
                    </div>
                    {/* image end */}
                    {/* card body start */}
                    <div class="card-body">
                      <h5 class="card-title">name,bread</h5>
                      <p class="card-text">
                        trained vaccinated
                        {/* here add if trained nd vc of not */}
                      </p>
                      <p class="card-text">
                        <i class="fa fa-address-book-o" aria-hidden="true" />
                        &nbsp Location
                        {/* here add location from backnd */}
                      </p>
                    </div>
                    {/* card body end */}
                    {/* card footer start */}
                    <div class="card-footer">
                      <span class="like-container">
                        <button type="submit" class="btn hvr-glow like-click">
                          <i class="fa fa-heart" style={{ color: "red" }} />
                        </button>
                        <span class="likes">5{/* here add like count */}</span>
                      </span>
                      <a
                        href="#petProfile"
                        class="btn more btn-outline-primary ml-3"
                      >
                        <i class="fa fa-info px-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto">
          <button
            class="btn btn-primary text-white mt-5 py-2 ml-2"
            id="goToTop"
            onClick={scrollToTop}
          >
            Go to top
          </button>
          &nbsp;
          <button
            class="btn btn-primary text-white mt-5 py-2 ml-2"
            id="goToUploads"
          >
            Go to uploads
          </button>
          &nbsp;
          <button
            class="btn btn-primary text-white mt-5 py-2 ml-2"
            id="goToLiked"
          >
            Go to liked
          </button>
        </div>
      </div>
      {/* modal from ofr update user info */}
      <div
        class="modal"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Update Info</h5>&nbsp;
              <span class="text-muted text-danger"> * required field</span>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="userUpdateModalForm">
              <form
                id="userProfile"
                style={{ border: "1px", solid: "#ccc" }}
                enctype="multipart/form-data"
              >
                <div class="form-container">
                  <label for="Name">
                    <b>Name</b>
                    <span class="text-muted text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="updateUserInfo"
                    placeholder="Enter  name..."
                    id="name"
                    name="name"
                    required
                  />
                  <label for="Email">
                    <b>Email</b>
                    <span class="text-muted text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="updateUserInfo"
                    placeholder="Enter Email..."
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="updateInfo">
                Update
              </button>
              <button
                type="button"
                class="btn btn-secondary"
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
  );
}
