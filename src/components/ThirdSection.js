import React from "react";
import photo from "../images/thumb-22.png";
import "./ThirdSection.css";

export default function ThirdSection() {
  return (
    <div className="third-container">
      <div className="third-container-inner">
        <div className="third-container-left">
          <img src={photo} alt="" />
        </div>
        <div className="third-container-right">
          <div className="third-container-title">
            Work faster with powerful tools.
          </div>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Combined with a handful of model sentence structures looks
                reasonable.
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Contrary to popular belief, Lorem ipsum is not simply random
                text.
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                All the Lorem ipsum generators on the internet tend to repeat
                necessary.
              </span>
            </li>
          </ul>
          <div className="third-container-icons">
            <div className="icon-container">
              <i className="fas fa-bell"></i>
            </div>
            <div className="icon-container">
              <i class="fas fa-envelope-open"></i>
            </div>
            <div className="icon-container">
              <i class="fas fa-video"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
