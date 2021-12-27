import React from "react";
import "./EighthSection.css";

export default function EighthSection() {
  return (
    <div className="eighth-container">
      <div className="eighth-section-title">Stay Tuned</div>
      <div className="eighth-section-dash"></div>
      <div className="eighth-section-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
        reprehenderit blanditiis nihil expedita corporis eos totam unde quam
        doloribus atque reiciendis quod.
      </div>
      <div className="eighth-section-lower">
        <div className="eighth-section-lower-left">
          <div className="eighth-section-lower-left-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            expedita hic, sint quibusdam nemo nihil. Cum, deserunt doloribus?
            Eum dicta nostrum quasi.
          </div>
          <ul>
            <li>
              <div className="lower-left-icon">
                <i class="fas fa-home"></i>
              </div>
              <div>Lebanon Beirut, Gemmayze main street, Lorem ipsum 2002</div>
            </li>
            <li>
              <div className="lower-left-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div>+1 230 456 789-012 345 6789</div>
            </li>
            <li>
              <div className="lower-left-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div>mhamad.safa.08@gmail.com</div>
            </li>
          </ul>
        </div>

        <div className="eighth-section-lower-right">
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="Subject" type="text" />
          <textarea
            className="textarea"
            placeholder="Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>
            <div></div>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
