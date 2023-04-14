import React from "react";
import { Link } from "react-scroll";
// import navBarLogo from './imgs/logo.jpg'

export default function Navbar() {
  return (
    <div className="menu-wrapper sticky">
      <h1><span>Car</span> Rental<span>4</span>U</h1>
      {/* <img src={navBarLogo} alt='Company Logo'></img> */}
      <ul className="menu-wrapper-ul">
        <Link to="/" spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          delay={10}>
          <li className="menu-button">Home</li>
        </Link>
        <Link
          to="/about"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-25}
          duration={500}
          delay={10}
        >
          <li className="menu-button">About</li>
        </Link>
        <Link
          to="/prices"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-65}
          duration={500}
          delay={10}
        >
          <li className="menu-button">Prices</li>
        </Link>
        <Link
          to="/contact"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-25}
          duration={500}
          delay={10}
        >
          <li className="menu-button">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
