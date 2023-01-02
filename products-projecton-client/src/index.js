import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-8tlg73znff4q2fu0.us.auth0.com"
        clientId="E8GACDJ8mnnMGYa9Tul68OkYMesKdtEn"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
      ,
    </BrowserRouter>
  </React.StrictMode>
);
