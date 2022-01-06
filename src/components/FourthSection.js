import React from "react";
import "./FourthSection.css";
import photo from "../images/thumb-2.png";
import { useTranslation } from "react-i18next";

export default function FourthSection() {
  const { t } = useTranslation();

  return (
    <div className="fourth-container">
      <div className="fourth-container-inner">
        <div className="fourth-container-left">
          <div className="fourth-container-title">
            {t("Fourth_section_title")}
          </div>
          <ul>
            <li>
              <div>
                <i class="fas fa-layer-group"></i>
              </div>
              <span>
                {t("Fourth_one")}
              </span>
            </li>
            <li>
              <div>
                <i class="fas fa-brush"></i>{" "}
              </div>
              <span>
              {t("Fourth_two")}
              </span>
            </li>
            <li>
              <div>
                <i class="far fa-tint"></i>{" "}
              </div>
              <span>
              {t("Fourth_three")}
              </span>
            </li>
            <li>
              <div>
                <i class="fas fa-cart-arrow-down"></i>{" "}
              </div>
              <span>
              {t("Fourth_four")}
              </span>
            </li>
          </ul>
          <button className="fourth-container-button">{t("Fourth_btn")}</button>
        </div>
        <div className="fourth-container-right">
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
}
