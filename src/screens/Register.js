import React, { useContext, useState } from "react";
import SessionContext from "../context/SessionContext";

export default function Register() {
  const {
    registerError,
    actions: { CostumerRegister },
  } = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="eighth-section-lower-right form">
      {registerError && (
        <span style={{ color: "red", textAlign: "center" }}>
          Please fill all the fields with the right credentials
        </span>
      )}
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        type="name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button onClick={() => CostumerRegister(name, email, password)}>
        Register
      </button>
    </div>
  );
}
