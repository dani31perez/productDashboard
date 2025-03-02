import React from "react";
import { useParams, Link } from "react-router";
import { products } from "../data/productData";
import { Button } from "react-bootstrap";
import "../index.css";

function ProductDetails({ cart, addCart, changeCart }) {
  const { productName } = useParams();
  const product = products.find((product) => product.name === productName);

  return (
    <>
      <h1 className="fw-bold">{product.name}</h1>
      <h4 className="my-4 fw-normal">Price: $ {product.price}</h4>
      <h4 className="fw-normal">{product.description}</h4>
      <div className="my-4">
        <Button className="mx-4 mb-4" onClick={() => addCart(productName, 1)}>
          Add to cart
        </Button>
        <Button className="mb-4" variant="secondary" as={Link} to="/home">
          Back to products
        </Button>
      </div>
    </>
  );
}

export default ProductDetails;
