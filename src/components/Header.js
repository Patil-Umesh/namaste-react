import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../../src/tasty-eats-logo.png";
// import UserContext from "../utils/UserContext";
import cartHeader from "../Cart-header.png";
import { useSelector } from "react-redux";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
  const [logIn, setLogIn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector:
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  // console.log(loggedInUser);

  // const onClick = () => {
  //   logIn === "Login" ? setLogIn("Logout") : setLogIn("Login");
  // };

  return (
    <div className="flex justify-between bg-pink-100 h-20 shadow-md fixed z-50 w-full">
      <div className="w-32 h-20">
        <Link to="/">
          <img className="w-32 h-20" src={logo} alt="logo-image" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-1 m-1 items-center content-center text-center">
          <li className="px-4">Online:{onlineStatus ? "✅" : "❌"} </li>
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact Us</Link>
          </li>
          {/* <li className="px-4">
            <Link to="grocery">Grocery</Link>
          </li> */}
          <li className="px-4">
            <Link to="about">About Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="cart">
              <div className="flex justify-center content-center">
                <img className="size-8" alt="Cart" src={cartHeader} />
                <h4 className="mx-2">({cartItems.length} Items) </h4>
              </div>
            </Link>
          </li>
          <li>
            <LoginBtn />{" "}
          </li>
          <li>
            <LogoutBtn />{" "}
          </li>
          {/* <button className="px-4" onClick={onClick}>
            {logIn}
          </button> */}
          {/* <li className="px-4 font-semibold text-gray-600">
            👽 {loggedInUser}{" "}
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
