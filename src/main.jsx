import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ProductDetails from "./components/ProductDetails.jsx";
import { Container } from "react-bootstrap";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <>
      <Header />
      <Container fluid={true} style={{marginLeft: "10vw", width: "90vw"}}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/product/:productName" element={<ProductDetails />} />
        </Routes>
      </Container>
    </>
  </BrowserRouter>
);
