import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "../src/root";
import Context from "../src/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>
);

