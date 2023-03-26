// react
import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// components
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
