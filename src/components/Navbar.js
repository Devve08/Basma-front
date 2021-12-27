import React, { useContext, useState } from "react";
import LogoImg from "../images/logo.svg";
import "../components/Navbar.css";
import SessionContext from "../context/SessionContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);
  const {
    session: {
      user: { access_token },
    },
    actions: { logout },
  } = useContext(SessionContext);

  return (
    <div className="navbar-section">
      <div className="logo-image">
        <img src={LogoImg} alt="Basma Logo" />
      </div>
      <div onClick={() => setMenuStatus(!menuStatus)} className="burger-div">
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </div>
      <nav className={menuStatus ? "navbar" : "navbar off"}>
        <ul>
          {access_token && (
            <>
              <li>Home</li>
              <li>Features</li>
              <li>Pages</li>
              <li>Screenshots</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li onClick={logout}>Logout</li>
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
                <li>Admins</li>
              </a>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
