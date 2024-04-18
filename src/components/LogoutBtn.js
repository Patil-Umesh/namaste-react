import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <>
        <button
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm mx-5 px-3 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
        <br />
        <Profile />
      </>
    );
  }
};
export default LogoutBtn;
