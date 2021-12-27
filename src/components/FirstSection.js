import React from "react";
import "./FirstSection.css";
import photo from '../images/thumb-1.png'

export default function FirstSection() {
  return (
    <div className="first-container">
      <div className="first-container-left">
        <div className="first-container-title">
          Creative way to showcase your App
        </div>
        <div className="first-container-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi
        </div>
        <button className="first-container-button">Get started</button>
      </div>
      <div className="first-container-right">
          <img src={photo} alt="" />
      </div>
    </div>
  );
}
