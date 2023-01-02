import React from "react";
import { Welcome } from "../components/auth0Components/Welcome";
import "../style/home.css";
export const HomePage = () => {
  return (
    <div className="home">
      <Welcome />
    </div>
  );
};
