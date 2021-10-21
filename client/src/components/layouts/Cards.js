import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
//import CardItem from "./CardItem";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards({ pet }) {
  console.log(pet);
  let image;
  return (
    <div className="col-md-4 col-xl-3 col-lg-3 col-sm-6 mb-5" >
      <div className="petcard">
        <div class="petinner">
          <img
            src={pet.images.url}
            id="cardImg"
            className="card-img-top"
            alt={pet.name}
          />
        </div>
        <div className="card-block">
          <h4 className="petcard-title text-center pt-3">
            {pet.name}
            {pet.likes}
          </h4>
          <div class="card-text text-center border-top ">
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center"> {pet.age}</li>
              <li class="list-group-item text-center"> {pet.breed}</li>
              <li class="list-group-item text-center">{pet.location}</li>
            </ul>
          </div>
        </div>
        <div className="petcard-footer">
          <span >
            <Link to={`/pet/${pet._id}`} class="info">
              <i
                class="fa fa-info-circle info"
                style={{ fontSize: "20px", color: "lightblue" }}
              ></i>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
