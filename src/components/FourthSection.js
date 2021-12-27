import React from "react";
import "./FourthSection.css";
import photo from "../images/thumb-2.png";

export default function FourthSection() {
  return (
    <div className="fourth-container">
      <div className="fourth-container-inner">
        <div className="fourth-container-left">
          <div className="fourth-container-title">
            Share photos with your firends easily
          </div>
          <ul>
            <li>
              <div>
                <i class="fas fa-layer-group"></i>
              </div>
              <span>
                Contrary to popular belief, Lorem ipsum is not simply random
                text. Contrary to popular belief, Lorem ipsum is not simply
                random text.
              </span>
            </li>
            <li>
              <div>
                <i class="fas fa-brush"></i>{" "}
              </div>
              <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium. Contrary to popular belief, Lorem ipsum is not
                simply random text.
              </span>
            </li>
            <li>
              <div>
                <i class="far fa-tint"></i>{" "}
              </div>
              <span>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit Contrary to popular belief, Lorem ipsum is not simply
                random text.
              </span>
            </li>
            <li>
              <div>
                <i class="fas fa-cart-arrow-down"></i>{" "}
              </div>
              <span>
                All the Lorem ipsum generators on the internet tend to repeat
                necessary. Contrary to popular belief, Lorem ipsum is not simply
                random text.
              </span>
            </li>
          </ul>
          <button className="fourth-container-button">Learn more</button>
        </div>
        <div className="fourth-container-right">
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
}
