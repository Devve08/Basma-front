import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Link,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import ThirdSection from "./components/ThirdSection";
import Login from "./screens/Login";
import LoginAdmin from "./screens/admin/AdminLogin";
import Register from "./screens/Register";
import SessionContext from "./context/SessionContext";
import { useContext } from "react";
import AdminHome from "./screens/admin/AdminHome";
import AddCustomer from "./screens/admin/AddCustomer";
import Home from "./screens/Home";
import Customers from "./screens/admin/Customers";

function App() {
  const {
    session: {
      user: { access_token, role },
    },
  } = useContext(SessionContext);
  return (
    <div className="App">
      {access_token && role === "Admin" && (
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route
            path="/admin"
            element={<AddCustomer />}
          />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/addcustomer" index element={<AddCustomer />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      )}
      {access_token && role === "Costumer" && (
        <>
          <Navbar />
          <div className="polygon"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Navigate to="/home" />} />
            <Route path="/register" element={<Navigate to="/home" />} />
            <Route path="/adminhome" element={<Navigate to="/admin" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<LoginAdmin />} />
          </Routes>
        </>
      )}
      {!access_token && (
        <>
          <Navbar />
          <div className="polygon"></div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Navigate to="/login" />} />
            <Route path="/customers" element={<Navigate to="/admin" />} />
            <Route path="/addcustomer" element={<Navigate to="/admin" />} />
            <Route path="/adminhome" element={<Navigate to="/admin" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<LoginAdmin />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
