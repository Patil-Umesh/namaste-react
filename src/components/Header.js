import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../../src/tasty-eats-logo.png";

const Header = () => {
  const [logIn, setLogIn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const onClick = () => {
    logIn === "Login" ? setLogIn("Logout") : setLogIn("Login");
  };

  return (
    <div className="flex justify-between bg-pink-100 h-20 shadow-md fixed w-full">
      <div className="w-32 h-20">
        <Link to="/">
          <img className="w-32 h-20" src={logo} alt="logo-image" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-1 m-1">
          <li className="px-4">Online:{onlineStatus ? "✅" : "❌"} </li>
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="about">About Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="px-4" onClick={onClick}>
            {logIn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
