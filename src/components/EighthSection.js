import React from "react";
import "./EighthSection.css";
import { useTranslation } from "react-i18next";

export default function EighthSection() {
  const { t } = useTranslation();
  return (
    <div className="eighth-container">
      <div className="eighth-section-title">
        {t("Last_section_title")}
      </div>
      <div className="eighth-section-dash"></div>
      <div className="eighth-section-text">
        {t("Last_section_text")}
      </div>
      <div className="eighth-section-lower">
        <div className="eighth-section-lower-left">
          <div className="eighth-section-lower-left-text">
            {t("Last_left")}
          </div>
          <ul>
            <li>
              <div className="lower-left-icon">
                <i class="fas fa-home"></i>
              </div>
              <div>
                {t("Last_left_1")}
              </div>
            </li>
            <li>
              <div className="lower-left-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div>
                {t("Last_left_2")}
              </div>
            </li>
            <li>
              <div className="lower-left-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                {t("Last_left_3")}
              </div>
            </li>
          </ul>
        </div>

        <div className="eighth-section-lower-right">
          <input placeholder={t("Placeholder_name")} type="text" />
          <input placeholder={t("Placeholder_email")} type="email" />
          <input placeholder={t("Placeholder_subject")} type="text" />
          <textarea
            className="textarea"
            placeholder={t("Placeholder_message")}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>
            <div></div>
            {t("Last_btn")}
          </button>
        </div>
      </div>
    </div>
  );
}
