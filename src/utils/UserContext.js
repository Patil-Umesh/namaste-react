import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default_User",
});
export default UserContext;
