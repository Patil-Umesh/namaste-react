import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  return (
    <>
      <div className=" rounded-lg bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
        <p className="userInfo text-center" id="userInfo1">
          {"👤 " + user.name}
        </p>
        {/* <p className="userInfo" id="userInfo2">
          Family Name: {user.family_name}
        </p>
        <p className="userInfo" id="userInfo4">
          Email: {user.email}
        </p> */}
        {/* <p className="userInfo" id="userInfo5">
          Sub: {user.sub}</p> */}
      </div>
    </>
  );
};
export default Profile;
