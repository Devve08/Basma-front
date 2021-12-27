import React from "react";
import { Link } from "react-router-dom";
import "./SixthSection.css";

export default function SixthSection() {
  return (
    <div className="sixth-container">
      <div className="sixth-container-upper">
        <div className="sixth-container-upper-title">BASMA code Challenge</div>
        <div className="sixth-container-upper-dash"></div>
        <div className="sixth-container-upper-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          doloremque sed sunt, tempore corrupti quae unde asperiores aliquam
          nemo in.
        </div>
      </div>
      <div className="sixth-container-middle">
        <div className="sixth-container-upper-cards">
          <div className="card-icon">
            <i class="far fa-bicycle"></i>
          </div>
          <div className="card-title">Basic</div>
          <div className="card-price">
            {" "}
            <span>$</span>45
          </div>
          <div className="card-list">
            <ul>
              <li>5GB Linux Web Space</li>
              <li>50 MySQL Databases</li>
              <li>24/7 Tech Support</li>
              <li>Daily Backups</li>
            </ul>
          </div>
          <button className="card-btn">Sign Up</button>
        </div>
        <div className="sixth-container-upper-cards">
          <div className="card-icon">
            <i class="fas fa-motorcycle"></i>
          </div>
          <div className="card-title">Pro</div>
          <div className="card-price">
            {" "}
            <span>$</span>129
          </div>
          <div className="card-list">
            <ul>
              <li>10GB Linux Web Space</li>
              <li>50 MySQL Databases</li>
              <li>Unlimited Email</li>
              <li>Daily Backups</li>
            </ul>
          </div>
          <button className="card-btn">Sign Up</button>
        </div>
      </div>
      <div className="sixth-container-lower">
          Not sure what to choose? <a to='/'>Contact Us</a>
      </div>
    </div>
  );
}
