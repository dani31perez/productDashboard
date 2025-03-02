import React from "react";
import { useParams, useNavigate } from "react-router";
import { products } from "../data/productData";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import "../index.css";

function ProductDetails() {
  const { productName } = useParams();
  const navigate = useNavigate();
  const product = products.find((product) => product.name === productName);

  return (
    <>
      <h1>{product.name}</h1>
      <h4 className="my-4">$ {product.price}</h4>
      <h4>{product.description}</h4>
      <Button className="mx-4">Add to cart</Button>
      <Button variant="secondary">Back to prodcuts</Button>
    </>
  );
}

export default ProductDetails;
