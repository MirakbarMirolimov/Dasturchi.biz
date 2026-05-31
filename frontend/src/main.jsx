import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./LanguageContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);