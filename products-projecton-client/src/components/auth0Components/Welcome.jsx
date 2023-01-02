import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

export const Welcome = (props) => {
  const { logout } = useAuth0();
  return (
    <div>
      <h1>Welcome</h1>
      <Profile />
      <button
        className="btn btn-primary"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    </div>
  );
};
