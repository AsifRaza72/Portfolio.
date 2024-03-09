import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="picture"></div>
      <div className="name">Asif Ali</div>
      <div>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Resume</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Services</li>
      <li>Contact</li>
      </ul>
      </div>
    </div>
  );
};

export default Header;
