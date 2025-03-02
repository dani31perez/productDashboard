import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </>
  </BrowserRouter>
);
