import React from "react";
import "./Cards.css";
//import CardItem from "./CardItem";

function Cards() {
  return (
    <div class="row mt-4 ml-3 mr-3 mb-5">
      <div class="col-md-4 col-xl-3 col-lg-3 col-sm-6 mb-5">
        <div class="card">
          <img src="./images/pets/DogBeagle.jpg" id="cardImg" class="card-img-top" alt="..." />
          <div class ="card-body">
          <h5 class ="card-title">text</h5>
          <p class ="card-text">Age: 3</p>
          <p class ="card-text">Breed: test</p>
          </div>
          <div class ="card-footer">
          <button type ="submit" class ="btn hvr-glow likeBtn mx-2"><i class ="fa fa-heart"></i></button>
          <button  href="#" class="btn btn-sm mx-2 detailsBtn">Details</button>
         
      
          <a  class ="btn btn-sm btn-outline-primary mx-2 btn-adopt" value="{{this._id}}" href="#">Adopt</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
