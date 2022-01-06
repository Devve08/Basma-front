import React from "react";
import apple from "../images/app-store.png";
import android from "../images/google-play.png";
import "./SeventhSection.css";
import { useTranslation } from "react-i18next";

export default function SeventhSection() {
  const { t } = useTranslation();
  return (
    <div className="seventh-container">
      <div className="seventh-container-background">
        <div className="seventh-container-background-title">
          {t("Seventh_section_title")}
        </div>
        <div className="seventh-container-background-text">
        {t("Seventh_section_text")}
        </div>
        <div className="seventh-container-background-icons">
          <img src={apple} alt="" />
          <img src={android} alt="" />
        </div>
        <div className="seventh-container-background-text-last">
        {t("Seventh_section_span")}
        </div>
      </div>
      <div className="subscribe-section">
        <div className="subscribe-section-title">
          {t("Seventh_section_subscribe")}
        </div>
        <div className="subscribe-section-text">
          {t("Seventh_section_subscribe_text")}
        </div>
        <input placeholder={t("Placeholder")} type="text" />
        <button className="subscribe-section-btn">
          {t("Seventh_section_btn")}
        </button>
      </div>
    </div>
  );
}
