import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import { UpdatedProvider } from "./Context/contextExample";
import ThemeProvider from "./Context/ThemeContext";
import ReloadProvider from "./Context/ReloadContext";
import { BrowserRouter } from "react-router-dom";

// import dotenv from "dotenv";
// dotenv.config();
axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || "http://localhost:3001";
console.log(process.env.REACT_APP_API_URL);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ReloadProvider>
          <App />
        </ReloadProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
