import React from "react";
import "./SecondSection.css";
import { useTranslation } from "react-i18next";

export default function SecondSection() {
  const { t } = useTranslation();
  return (
    <div className="second-container">
      <div className="second-section-upper">
        <div className="second-container-title">
          {t("Second_section_title")}
        </div>
        <span className="second-container-span"> </span>
        <div className="second-container-text">{t("Second_section_text")}</div>
      </div>
      <div className="second-section-lower">
        <div className="second-container-box">
          <div className="box-icon">
            <i className="fas fa-fingerprint"></i>
          </div>
          <div className="box-title">{t("Second_section_1_title")}</div>
          <div className="box-text">{t("Second_section_para")}</div>
        </div>
        <div className="second-container-box">
          <div className="box-icon">
            <i class="far fa-hand-point-up"></i>
          </div>
          <div className="box-title">{t("Second_section_1_title")}</div>
          <div className="box-text">{t("Second_section_para")}</div>
        </div>
        <div className="second-container-box">
          <div className="box-icon">
            <i class="far fa-square"></i>{" "}
          </div>
          <div className="box-title"> {t("Second_section_1_title")} </div>
          <div className="box-text">{t("Second_section_para")}</div>
        </div>
        <div className="second-container-box">
          <div className="box-icon">
            <i class="fal fa-map-marker-alt"></i>
          </div>
          <div className="box-title"> {t("Second_section_4_title")} </div>
          <div className="box-text">{t("Second_section_para")}</div>
        </div>
        <div className="second-container-box">
          <div className="box-icon">
            <i class="far fa-cogs"></i>{" "}
          </div>
          <div className="box-title"> {t("Second_section_5_title")} </div>
          <div className="box-text">{t("Second_section_para")}</div>
        </div>
        <div className="second-container-box">
          <div className="box-icon">
            <i class="fal fa-globe"></i>{" "}
          </div>
          <div className="box-title"> {t("Second_section_6_title")} </div>
          <div className="box-text">{t("Second_section_para")}</div>
        </div>
      </div>
    </div>
  );
}
