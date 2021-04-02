import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./Component/About";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <About />
  </React.StrictMode>,
  document.getElementById("root")
);
