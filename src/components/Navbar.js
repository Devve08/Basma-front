import React, { useContext, useEffect, useState } from "react";
import LogoImg from "../images/logo.svg";
import "../components/Navbar.css";
import SessionContext from "../context/SessionContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookie from "js-cookie";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "fr",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
];

export default function Navbar() {
  const currentLangCode = cookie.get("i18next") || "en";
  const currentLang = languages.find((l) => l.code === currentLangCode);
  const { t } = useTranslation();
  const [menuStatus, setMenuStatus] = useState(false);
  const [codeValue, setCodeValue] = useState("");
  const {
    session: {
      user: { access_token, role },
    },
    actions: { logout },
  } = useContext(SessionContext);

  useEffect(() => {
    document.body.dir = currentLang.dir || "ltr";
  }, [currentLang]);
  return (
    <div className="navbar-section">
      <div
        className={currentLangCode === "ar" ? "polygon-arabic" : "polygon"}
      ></div>
      <div className="logo-image">
        <img src={LogoImg} alt="Basma Logo" />
      </div>
      {access_token && role === "Costumer" && (
        <div className="select-container">
          <select onChange={(e) => i18next.changeLanguage(e.target.value)}>
            {languages.map(({ code, name, country_code }) => (
              <option value={code} key={country_code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )}
      <div onClick={() => setMenuStatus(!menuStatus)} className="burger-div">
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </div>
      <nav className={menuStatus ? "navbar" : "navbar off"}>
        <ul>
          {access_token && (
            <>
              <li>{t("Home")}</li>
              <li>{t("Features")}</li>
              <li>{t("Pages")}</li>
              <li>{t("Screenshots")}</li>
              <li>{t("Pricing")}</li>
              <li>{t("Contact")}</li>
              <li onClick={logout}>{t("Logout")}</li>
            </>
          )}
          {!access_token && (
            <>
              <a className="link" href="/login">
                <li>Login</li>
              </a>
              <a className="link" href="/register">
                <li>Register</li>
              </a>
              <a className="link" href="/admin">
                <li>Admin</li>
              </a>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
