import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import { useState } from "react";
import { products } from "./data/productData";

function App() {
  const [cart, setCart] = useState(Array(products.length).fill(0));

  const cartSize = cart.filter((quantity) => quantity !== 0).length;

  const addCart = (productName) => {
    const index = products.findIndex((product) => productName === product.name);
    const newCart = [...cart];
    if (newCart[index] > 0) return;
    newCart[index] = 1;
    setCart(newCart);
  };

  const changeCart = (productName, quantity) => {
    const index = products.findIndex((product) => productName === product.name);
    const newCart = [...cart];
    newCart[index] += quantity;
    setCart(newCart);
  };

  return (
    <BrowserRouter>
      <Header cartSize={cartSize} />
      <Container fluid={true} style={{ marginLeft: "10vw", width: "90vw" }}>
        <AppRoutes cart={cart} addCart={addCart} changeCart={changeCart} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
