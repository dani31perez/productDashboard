import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";

function AppRoutes({ cart, addCart, changeCart, deleteCart }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/product/:productName"
        element={
          <ProductDetails
            cart={cart}
            addCart={addCart}
            changeCart={changeCart}
          />
        }
      />
      <Route
        path="/shoppingCart"
        element={
          <ShoppingCart cart={cart} changeCart={changeCart} deleteCart={deleteCart} />
        }
      />
    </Routes>
  );
}

export default AppRoutes;
