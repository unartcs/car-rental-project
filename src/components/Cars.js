import React, { useState, useEffect } from "react";
import carsData from "../data/carsData";
import CarView from "./CarView";

function Cars() {
  const [activeCar, setActiveCar] = useState(carsData[0]);
  const [carPicture, setcarPicture] = useState(activeCar.imageURL);
  const logo = require("../imgs/audi-a1.png");
  const carOverviewHandler = (key) => {
    setActiveCar(carsData[carsData.map((car) => car.ID).indexOf(key)]);
    setcarPicture(activeCar.imageURL);
  };
  useEffect(() => {
    console.log(activeCar);
  }, [activeCar]);
  return (
    <div className="prices-container">
      <div className="car-menu-wrapper">
        <ul>
          {carsData.map((car) => {
            return (
              <li key={car.ID} onClick={() => carOverviewHandler(car.ID)}>
                {car.Model} {car.Mark}
              </li>
            );
          })}
        </ul>
        <div className="car-img-container">
          <img
            src={require(`../imgs/${activeCar.imageURL}`)}
            alt={activeCar.Model}
          />
        </div>
        <CarView activeCar={activeCar} />
      </div>
      <div class="button-wrapper">
        <h1>Only {activeCar.rentPrice}$ a day!</h1>
        <h2>Order now</h2>
      </div>
    </div>
  );
}

export default Cars;
