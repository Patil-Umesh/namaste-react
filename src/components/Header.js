import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [logIn, setLogIn] = useState("Login");

  const onClick = () => {
    logIn === "Login" ? setLogIn("Logout") : setLogIn("Login");
  };

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-image" src={LOGO_URL} alt="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={onClick}>
            {logIn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
