import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "./reset.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Welcome to the GRID</h1>
    <App />
  </React.StrictMode>
);
