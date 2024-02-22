import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/Car.jpg";
import userProfile from "./images/user.png";

//React Element
// const jsxHeading = <h1 id="heading">Namaste React🚀 Element</h1>;

//React component
// const JsxHeading = () => <h1 id="heading">Namaste React🚀 Component</h1>;

//Functional Component:
// Component composition => combining two or more components
// const HeadingComponent = () => (
//   <div id="container">
//     {jsxHeading}
//     {JsxHeading()}
//     <JsxHeading />
//     <h1>React Functional Component</h1>
//   </div>
// );

const Header = () => (
  <div id="header">
    <img className="logo-image" src={logo} alt="image not found" />
    <input
      className="searchbar"
      type="text"
      placeholder="Search here"
      // onChange={handleChange}
      // value={searchInput}
    />
    <img className="profile-image" src={userProfile} alt="profile not found" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
