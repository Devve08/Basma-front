import React, { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import config from "../config";
import SessionContext from "../context/SessionContext";

export default function Register() {
  const {
    setData,
    data,
    registerError,
    actions: { CostumerRegister },
  } = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onChangeRecaptcha = (value) => {
    setData({
      ...data,
      recaptcha_token: value,
    });
  };
  return (
    <div className="eighth-section-lower-right form">
      {registerError && (
        <span style={{ color: "red", textAlign: "center" }}>
          Please fill all the fields with the right credentials
        </span>
      )}
      <input
        onChange={(e) =>
          setData({
            ...data,
            name: e.target.value,
          })
        }
        placeholder="Name"
        type="name"
      />
      <input
        onChange={(e) =>
          setData({
            ...data,
            email: e.target.value,
          })
        }
        placeholder="Email"
        type="email"
      />
      <input
        onChange={(e) =>
          setData({
            ...data,
            password: e.target.value,
          })
        }
        placeholder="Password"
        type="password"
      />
      <button onClick={() => CostumerRegister(name, email, password)}>
        Register
      </button>
        {console.log(data)}
      <ReCAPTCHA
        style={{ margin: "auto", marginTop: "1rem" }}
        sitekey={config.RECAPTCHA_SITEKEY}
        onChange={onChangeRecaptcha}
      />
    </div>
  );
}
