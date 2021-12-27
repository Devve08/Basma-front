import React from "react";
import "./FifthSection.css";

export default function FifthSection() {
  return (
    <div className="fifth-container">
      <div className="fifth-container-upper">
        <div className="fifth-container-upper-title">Code Challenge</div>
        <div className="fifth-container-upper-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit in voluptate
        </div>
      </div>
      <div className="fifth-container-lower">
        <div className="fifth-container-lower-instruction">
          <div className="fifth-container-lower-icon">
            <i class="fal fa-cloud-download"></i>
          </div>
          <div className="fifth-container-lower-title">Install the App</div>
          <div className="fifth-container-lower-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </div>
        <div className="arrow-right">
          <i class="fas fa-chevron-right"></i>
        </div>
        <div className="fifth-container-lower-instruction">
          <div className="fifth-container-lower-icon">
            <i class="fal fa-sliders-v"></i>
          </div>
          <div className="fifth-container-lower-title">Setup your profile</div>
          <div className="fifth-container-lower-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </div>
        <div className="arrow-right">
          <i class="fas fa-chevron-right"></i>
        </div>
        <div className="fifth-container-lower-instruction">
          <div className="fifth-container-lower-icon">
            <i class="far fa-user-cog"></i>{" "}
          </div>
          <div className="fifth-container-lower-title">Enjoy the features!</div>
          <div className="fifth-container-lower-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </div>
      </div>
    </div>
  );
}
