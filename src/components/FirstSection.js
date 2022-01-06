import React from "react";
import "./FirstSection.css";
import photo from '../images/thumb-1.png'
import { useTranslation, initReactI18next } from "react-i18next";

export default function FirstSection() {
  const { t } = useTranslation();
  return (
    <div className="first-container">
      <div className="first-container-left">
        <div className="first-container-title">
        {t("Welcome_to_react")}
        </div>
        <div className="first-container-paragraph">
          {t("First_section_text")}
        </div>
        <button className="first-container-button">{t("First_section_btn")}</button>
      </div>
      <div className="first-container-right">
          <img src={photo} alt="" />
      </div>
    </div>
  );
}
