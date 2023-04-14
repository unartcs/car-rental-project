import React from "react";
import carHeroImage from "../imgs/carheroimage.png";
import { Element } from "react-scroll";

export default function Hero() {
  return (
    <Element name="/">
      <div className="hero-wrapper">
        <div className="hero-text-content">
          <h2>
            Plan your trip with <span>our</span> Vehicles!
          </h2>
          <h3>
            Save a lot of <span>money</span> choosing us!
            <p>
              Save a lot of <span>headache</span> choosing us!
            </p>
          </h3>
        </div>
        <img src={carHeroImage} alt="Cars" />
      </div>
    </Element>
  );
}
