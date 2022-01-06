import React from "react";
import { Link } from "react-router-dom";
import "./SixthSection.css";
import { useTranslation } from "react-i18next";

export default function SixthSection() {
  const { t } = useTranslation();

  return (
    <div className="sixth-container">
      <div className="sixth-container-upper">
        <div className="sixth-container-upper-title">
          {t("Sixth_section_title")}
        </div>
        <div className="sixth-container-upper-dash"></div>
        <div className="sixth-container-upper-text">
          {t("Sixth_section_text")}
        </div>
      </div>
      <div className="sixth-container-middle">
        <div className="sixth-container-upper-cards">
          <div className="card-icon">
            <i class="far fa-bicycle"></i>
          </div>
          <div className="card-title">{t("Left_title")}</div>
          <div className="card-price">
            {" "}
            <span>$</span>45
          </div>
          <div className="card-list">
            <ul>
              <li>{t("Left_1")}</li>
              <li>{t("Left_2")}</li>
              <li>{t("Left_3")}</li>
              <li>{t("Left_4")}</li>
            </ul>
          </div>
          <button className="card-btn">{t("Right_btn")}</button>
        </div>
        <div className="sixth-container-upper-cards">
          <div className="card-icon">
            <i class="fas fa-motorcycle"></i>
          </div>
          <div className="card-title">{t("Right_title")}</div>
          <div className="card-price">
            {" "}
            <span>$</span>129
          </div>
          <div className="card-list">
            <ul>
              <li>{t("Right_1")}</li>
              <li>{t("Right_2")}</li>
              <li>{t("Right_3")}</li>
              <li>{t("Right_4")}</li>
            </ul>
          </div>
          <button className="card-btn">
            {t("Right_btn")}
          </button>
        </div>
      </div>
      <div className="sixth-container-lower">
        {t("Sixth_section_span")}
      </div>
    </div>
  );
}
