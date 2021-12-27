import React from "react";
import apple from "../images/app-store.png";
import android from "../images/google-play.png";
import "./SeventhSection.css";

export default function SeventhSection() {
  return (
    <div className="seventh-container">
      <div className="seventh-container-background">
        <div className="seventh-container-background-title">
          BASMA is available for all devices
        </div>
        <div className="seventh-container-background-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          quibusdam dolor voluptates exercitationem repudiandae molestias vero.
          Mollitia, ex! Sequi, molestiae animi nemo debitis non quibusdam maxime
          expedita quae sit quaerat.
        </div>
        <div className="seventh-container-background-icons">
          <img src={apple} alt="" />
          <img src={android} alt="" />
        </div>
        <div className="seventh-container-background-text-last">
          * Available on iPhone, iPad and all Android devices
        </div>
      </div>
      <div className="subscribe-section">
        <div className="subscribe-section-title">Subscribe to get updates</div>
        <div className="subscribe-section-text">
          By subscribing you will get newsletter, promotions adipisicing Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          asperiores minus atque omnis.
        </div>
        <input placeholder="Enter your email" type="text" />
        <button className="subscribe-section-btn">Subscribe</button>
      </div>
    </div>
  );
}
