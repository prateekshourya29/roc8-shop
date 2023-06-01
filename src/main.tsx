// react
import React from "react";
import ReactDOM from "react-dom/client";
// recoil
import { RecoilRoot } from "recoil";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// components
import App from "./App";
// css
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
