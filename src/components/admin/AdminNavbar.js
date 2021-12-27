import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SessionContext from "../../context/SessionContext";
import "./AdminNavbar.css";

export default function AdminNavbar() {
  const {
    actions: { logout },
  } = useContext(SessionContext);
  return (
    <div className="navbar-container-admin">
      <nav className="navbar-admin">
        <ul>
          <Link className="link" to='/addcustomer'>
            <li>Add Customer</li>
          </Link>

          <Link className="link" to="/customers">
            <li>View Customers</li>
          </Link>
          <li onClick={logout}>Logout</li>
        </ul>
      </nav>
    </div>
  );
}
