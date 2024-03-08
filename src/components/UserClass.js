import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log(this.props.name + "Child constructor");
  }
  componentDidMount() {
    console.log(this.props.name + "Child component DidMount");
    // this.timer = setInterval(() => {
    //   console.log("Hii... Calling from child componentDidMount");
    // }, 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log(" Child componentWillUnmount");
  }
  render() {
    console.log(this.props.name + "Child render");
    const { name, username, location } = this.props;
    return (
      <div className="user-card">
        <h3>Count: {this.state.count} </h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Counter
        </button>
        <h3>Name: {name} </h3>
        <h3>Username: {username} </h3>
        <h3>Location: {location} </h3>
      </div>
    );
  }
}
export default UserClass;
