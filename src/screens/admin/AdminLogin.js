import React, { useContext, useState } from "react";
import SessionContext from "../../context/SessionContext";

export default function LoginAdmin() {
  const {
    adminLoginError,
    actions: { AdminLogin },
  } = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleLogin = () => {
    AdminLogin(email, password);
  };

  return (
    <div className="eighth-section-lower-right form">
      {adminLoginError && (
        <span style={{ color: "red", textAlign: "center" }}>
          Please enter the right credentials
        </span>
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
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
}
