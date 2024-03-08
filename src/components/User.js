import { useState } from "react";

const User = ({ name, username, location }) => {
  const [count] = useState(1);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <h3>Name: {name}</h3>
      <h3>Username: {username}</h3>
      <h3>Location: {location}</h3>
    </div>
  );
};
export default User;
