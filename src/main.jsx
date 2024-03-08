import React from "react";
import ReactDOM from "react-dom/client";
import ScreenWakeLock from "screen-wake-lock/lib/ScreenWakeLock";
import "./index.css";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScreenWakeLock />
    <App />
  </React.StrictMode>
);
