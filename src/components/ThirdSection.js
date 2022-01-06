import React from "react";
import photo from "../images/thumb-22.png";
import "./ThirdSection.css";
import { useTranslation } from "react-i18next";

export default function ThirdSection() {
  const { t } = useTranslation();
  return (
    <div className="third-container">
      <div className="third-container-inner">
        <div className="third-container-left">
          <img src={photo} alt="" />
        </div>
        <div className="third-container-right">
          <div className="third-container-title">
            {t("Third_section_title")}
          </div>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span>
                {t("First_text")}
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
              {t("Second_text")}
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
              {t("Third_text")}
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
              {t("Fourth_text")}
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
              {t("Fifth_text")}
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
