import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Abouthash from "./Abouth/Abouthash.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Verify from "./Verification/Verify.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/generate" replace={true} />} />
        <Route path="/generate" element={<App />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/about-hash" element={<Abouthash />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
