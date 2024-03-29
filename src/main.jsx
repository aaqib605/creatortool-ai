import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostGenerator from "./components/PostGenerator.jsx";
import Dashboard from "./components/Dashboard.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/second" element={<PostGenerator />} />
        <Route path="/third" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
