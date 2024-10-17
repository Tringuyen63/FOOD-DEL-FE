import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvide from "./context/StoreContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvide>
      <App />
    </StoreContextProvide>
  </BrowserRouter>
);
