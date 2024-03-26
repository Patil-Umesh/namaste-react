import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "temp",
        login: "test",
        location: "default",
      },
    };
    // console.log(this.props.name + "Child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Patil-Umesh");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Componet didMount");
  }
  componentDidUpdate() {
    console.log("componet didUpdate");
  }
  render() {
    // console.log(this.props.name + "Child render");
    const { name, login, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="user-card mt-32 pl-[35rem] pr-[35rem]">
        <img alt="avatar" src={avatar_url} />
        <h3>Name: {name} </h3>
        <h4>Bio:{bio} </h4>
        <h4>Login: {login} </h4>
        <h4>Location: {location} </h4>
      </div>
    );
  }
}
export default UserClass;
