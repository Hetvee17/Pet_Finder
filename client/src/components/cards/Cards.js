import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
//import CardItem from "./CardItem";

function Cards({ pet }) {
  console.log(pet);
  let image;
  return (
    <div className="col-md-4 col-xl-3 col-lg-3 col-sm-6 mb-5">
      <div className="card">
        <img src={pet.images.url} id="cardImg" className="card-img-top" alt={pet.name} />
        <div className="card-body">
          <h5 className="card-title">{pet.name}</h5>
          <p className="card-text">Age: {pet.age}</p>
          <p className="card-text">Breed: {pet.breed}</p>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn hvr-glow likeBtn mx-2">
            <i className="fa fa-heart"></i>
          </button>
          <button className="btn btn-sm mx-2 detailsBtn">
            <Link to={`/pets/${pet._id}`} >description</Link>
          </button>

          <button
            className="btn btn-sm btn-outline-primary mx-2 btn-adopt"
            value="{{this._id}}"
          >
            <Link>Adopt</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
