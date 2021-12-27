import React from "react";
import "./SecondSection.css";

export default function SecondSection() {
  return (
    <div className="second-container">
      <div className="second-section-upper">
        <div className="second-container-title">Code Challenge</div>
        <span className="second-container-span"> </span>
        <div className="second-container-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua sit amet,
          consectetur adipiscing elit.
        </div>
      </div>
      <div className="second-section-lower">
        <div className="second-container-box">
          <div className="box-icon">
            <i className="fas fa-fingerprint"></i>
          </div>
          <div className="box-title"> Fully functional </div>
          <div className="box-text">
            {" "}
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua sit amet, consectetur.{" "}
          </div>
        </div>
        <div className="second-container-box">
          <div className="box-icon">
            <i class="far fa-hand-point-up"></i>
          </div>
          <div className="box-title"> Fully functional </div>
          <div className="box-text">
            {" "}
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua sit amet, consectetur.{" "}
          </div>
        </div>
        <div className="second-container-box">
          <div className="box-icon">
            <i class="far fa-square"></i>{" "}
          </div>
          <div className="box-title"> Fully functional </div>
          <div className="box-text">
            {" "}
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua sit amet, consectetur.{" "}
          </div>
        </div>
        <div className="second-container-box">
          <div className="box-icon">
            <i class="fal fa-map-marker-alt"></i>
          </div>
          <div className="box-title"> Location Tracking </div>
          <div className="box-text">
            {" "}
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua sit amet, consectetur.{" "}
          </div>
        </div>
        <div className="second-container-box">
          <div className="box-icon">
            <i class="far fa-cogs"></i>{" "}
          </div>
          <div className="box-title"> Powerful Settings </div>
          <div className="box-text">
            {" "}
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua sit amet, consectetur.{" "}
          </div>
        </div>
        <div className="second-container-box">
          <div className="box-icon">
            <i class="fal fa-globe"></i>{" "}
          </div>
          <div className="box-title"> Multiple Language </div>
          <div className="box-text">
            {" "}
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua sit amet, consectetur.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
