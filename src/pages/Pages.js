import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Prices from "../pages/Prices";
import Contact from "../pages/Contact";
import { Element } from "react-scroll";

function Pages() {

  return (
    <div>
      <div className="body-wrapper">
        <Element name="/">
          <Home />
        </Element>
        <Element name="/about">
          <About />
        </Element>
        <Element name="/prices">
          <Prices />
        </Element>
        <Element name="/contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default Pages;
