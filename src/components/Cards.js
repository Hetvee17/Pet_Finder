import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../images/pets/DogBeagle.jpg"
              text="Beagle age : 2 years"
              label="Dog"
              path="/"
            />
            <CardItem
              src="../images/pets/DogBeagle.jpg"
              text="Beagle age : 2 years"
              label="Dog"
              path="/"
            />
            <CardItem
              src="../images/pets/DogBeagle.jpg"
              text="Beagle age : 2 years"
              label="Dog"
              path="/"
            />
            <CardItem
              src="../images/pets/DogBeagle.jpg"
              text="Beagle age : 2 years"
              label="Dog"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
