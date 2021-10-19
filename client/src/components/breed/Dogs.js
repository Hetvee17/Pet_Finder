import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dogs.css";

function Dogs() {
  return (
    <>
      {" "}
      <div class="container mt-5">
        <h1 class="display-3">Search Dog by Breed</h1>
        <div class="row">
          <div class="col-12 col-md-12">
            <form action="/dogs" method="GET">
              <div class="form-group">
                <select
                  name="breed"
                  id="breed_select"
                  class="custom-select breed"
                >
                  <option></option>
                </select>
              </div>
              <button class="btn btn-outline-dark hvr-grow" id="search">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="container result">
        <div class="row mt-5">
          <div class="col-md-7 col-sm-7 col-7 ">
            <div class="jumbotron">
              <p class="lead">Select a dog breed to get info.</p>
            </div>
          </div>
          <div class="col-md-5 col-7 col-sm-7 img-fluid">
            <div id="dogImg"></div>
          </div>
        </div>
      </div>
      <div class="row mt-4 ml-3 mr-3 mb-5">
        <div class="col-md-4 col-12 col-lg-4 col-sm-6 col-xl-3 mb-5">
          <div class="card">
            <img src="sample" id="cardImg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">this.name</h5>
              <p class="card-text">Age: this.age</p>
              <p class="card-text">Breed: breeds</p>
            </div>
            <div class="card-footer">
              <a
                type="button"
                class="btn btn-sm ml-2 detailsBtn"
                href="/petprofile/id"
              >
                Details
              </a>
              <a
                type="button"
                class="btn btn-sm btn-primary ml-2 adopt"
                href="/adopt/id"
              >
                Adopt
              </a>
              <p class="card-text">Animal: category</p>
            </div>
            <div class="card-footer">
              <a
                type="button"
                class="btn btn-sm ml-5 detailsBtn"
                href="/petprofile/id"
              >
                Details
              </a>
              <a
                type="button"
                class="btn btn-sm ml-5 adopt"
                href="/adopt/{{this._id}}"
              >
                Adopt
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dogs;
