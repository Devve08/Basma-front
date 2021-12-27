import React, { useContext, useState } from "react";
import SessionContext from "../context/SessionContext";

export default function Login() {
  const {
    loginError,
    actions: { CostumerLogin },
  } = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="eighth-section-lower-right form">
      {loginError && (
        <span style={{ color: "red", textAlign: "center" }}>Please enter the right credentials</span>
      )}
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
      <button onClick={() => CostumerLogin(email, password)}>Login</button>
    </div>
  );
}
