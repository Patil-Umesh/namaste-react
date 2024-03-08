import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor function");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount function");
  }
  componentWillUnmount() {
    console.log(" Parent componentWillUnmount");
  }
  render() {
    console.log("Parent render function");
    return (
      <div className="about-us">
        <h1>About Us</h1>
        <UserClass name={"First"} username={"u-patil"} location={"Pune"} />
        <UserClass name={"Second"} username={"u-patil"} location={"Pune"} />
      </div>
    );
  }
}

export default About;
