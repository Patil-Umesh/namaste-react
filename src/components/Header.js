import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
          <li>Home</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li>About Us</li>
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
