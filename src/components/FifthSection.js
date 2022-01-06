import React from "react";
import "./FifthSection.css";
import { useTranslation } from "react-i18next";

export default function FifthSection() {
  const { t } = useTranslation();
  return (
    <div className="fifth-container">
      <div className="fifth-container-upper">
        <div className="fifth-container-upper-title">
          {t("Fifth_section_title")}
        </div>
        <div className="fifth-container-upper-text">
          {t("Fifth_section_text")}
        </div>
      </div>
      <div className="fifth-container-lower">
        <div className="fifth-container-lower-instruction">
          <div className="fifth-container-lower-icon">
            <i class="fal fa-cloud-download"></i>
          </div>
          <div className="fifth-container-lower-title">
            {t("Fifth_section_1")}
          </div>
          <div className="fifth-container-lower-text">
            {t("Fifth_section_text_down")}
          </div>
        </div>
        <div className="arrow-right">
          <i class="fas fa-chevron-right"></i>
        </div>
        <div className="fifth-container-lower-instruction">
          <div className="fifth-container-lower-icon">
            <i class="fal fa-sliders-v"></i>
          </div>
          <div className="fifth-container-lower-title">
            {t("Fifth_section_2")}
          </div>
          <div className="fifth-container-lower-text">
            {t("Fifth_section_text_down")}
          </div>
        </div>
        <div className="arrow-right">
          <i class="fas fa-chevron-right"></i>
        </div>
        <div className="fifth-container-lower-instruction">
          <div className="fifth-container-lower-icon">
            <i class="far fa-user-cog"></i>{" "}
          </div>
          <div className="fifth-container-lower-title">
            {t("Fifth_section_3")}
          </div>
          <div className="fifth-container-lower-text">
            {t("Fifth_section_text_down")}
          </div>
        </div>
      </div>
    </div>
  );
}
