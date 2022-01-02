import React, { useState } from "react";
import SessionContext from "./SessionContext";
import axios from "axios";
import config from "../config";

const init_user_info = {
  name: "",
  email: "",
  password: "",
  recaptcha_token: false,
};

export default function SessionProvider({ children }) {
  const [data, setData] = useState(init_user_info);
  const [loginError, setLoginError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [adminLoginError, setAdminLoginError] = useState(false);
  const [cusAddedSuccessfully, setAddedSuccessfully] = useState(false);
  const [session, setSession] = useState({
    user: {
      access_token: localStorage.getItem("access_token"),
      name: localStorage.getItem("name"),
      id: localStorage.getItem("id"),
      role: localStorage.getItem("role"),
    },
  });

  function updateSession(nextSession) {
    let value =
      typeof nextSession === "function"
        ? nextSession
        : (prevSession) => ({ ...prevSession, ...nextSession });
    setSession(value);
  }

  const CostumerLogin = async (email, password) => {
    setLoginError(false);
    setRegisterError(false);
    try {
      const body = new FormData();
      body.append("email", email);
      body.append("password", password);
      const response = await axios.post(
        `${config.Base_Online}/api/users/login`,
        body
      );
      const { access_token, name, id, role } = response.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("role", role);
      const user = { access_token, id, name, role };
      updateSession({ user });
    } catch (error) {
      console.log("hello", error.message);
      setLoginError(true);
    }
  };
  const CostumerRegister = async () => {
    try {
      const response = await axios.post(
        `${config.Base_testing}/api/users/register`,
        data
      );
      console.log(response);
      if (
        !response.data.error_msg &&
        response.data.name &&
        response.data.access_token
      ) {
        const { access_token, name, id, role } = response.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("role", role);
        const user = { access_token, id, name, role };
        updateSession({ user });
      }
      console.log(response.data.error_msg);
    } catch (error) {
      console.log(error.message);
      setRegisterError(true);
    }
  };

  const AdminCustomerAdd = async (names, email, password) => {
    setLoginError(false);
    setRegisterError(false);
    setAddedSuccessfully(false);
    try {
      const body = new FormData();
      body.append("email", email);
      body.append("name", names);
      body.append("password", password);
      const response = await axios.post(
        `${config.Base_testing}/api/admins/addcustomer`,
        body,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (!response) {
        setRegisterError(true);
      }
      setAddedSuccessfully(true);
    } catch (error) {
      console.log(error.message);
      setRegisterError(true);
    }
  };

  const AdminLogin = async (email, password) => {
    setRegisterError(false);
    setLoginError(false);
    setAdminLoginError(false);
    try {
      const body = new FormData();
      body.append("email", email);
      body.append("password", password);
      const response = await axios.post(
        `${config.Base_testing}/api/admins/login`,
        body
      );
      const { access_token, name, id, role } = response.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("role", role);
      const user = { access_token, id, name };
      updateSession({ user });
    } catch (error) {
      setAdminLoginError(true);
      console.log(error.message);
    }
  };

  const AdminRegister = async (name, email, password) => {
    const body = new FormData();
    body.append("email", email);
    body.append("name", name);
    body.append("password", password);
    const response = await axios.post(
      `${config.Base_testing}/api/admins/register`,
      {
        body,
      }
    );
    const result = await response.json();
    if (result.error) {
    } else {
      const { access_token, name, id, role } = result;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("role", role);
      const user = { access_token, id, name, role };
      updateSession({ user });
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    const user = { access_token: null, name: null };
    updateSession({ user });
  };

  const context = {
    session,
    loginError,
    registerError,
    adminLoginError,
    cusAddedSuccessfully,
    setData,
    data,
    actions: {
      AdminLogin,
      AdminRegister,
      logout,
      CostumerLogin,
      CostumerRegister,
      AdminCustomerAdd,
    },
  };
  return (
    <SessionContext.Provider value={context}>
      {children}
    </SessionContext.Provider>
  );
}
