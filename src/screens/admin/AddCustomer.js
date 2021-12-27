import React, { useContext, useState } from "react";
import AdminAverageData from "../../components/admin/AdminAverageData";
import AdminNavbar from "../../components/admin/AdminNavbar";
import SessionContext from "../../context/SessionContext";
import './AddCustomer.css'

export default function AddCustomer() {
  const {
    cusAddedSuccessfully,
    registerError,
    actions: { AdminCustomerAdd },
  } = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    AdminCustomerAdd(name, email, password);
    setEmail("");
    setName("");
    setPassword("");
  };
  return (
    <div className="add-costumer-section">
      <AdminNavbar />
      <AdminAverageData />
      <div className="eighth-section-lower-right center">
        {registerError && (
          <span style={{ color: "red", textAlign: "center" }}>
            Please fill all the fields with the right credentials
          </span>
        )}
        {cusAddedSuccessfully && (
          <span style={{ color: "green", textAlign: "center" }}>
            Customer added successfully
          </span>
        )}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button onClick={handleSubmit}>Add Customer</button>
      </div>
    </div>
  );
}
