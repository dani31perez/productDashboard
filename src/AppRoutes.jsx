import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:productName" element={<ProductDetails />} />
    </Routes>
  );
}

export default AppRoutes;
