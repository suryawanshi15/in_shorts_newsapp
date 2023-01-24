import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/ankss@001" target="__blank">
          Ankit Suryawanshi 
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/spam__1526/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        
        <a href="https://ankit.me/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;