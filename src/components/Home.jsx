import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import { products } from "../data/productData";

function Home() {
  return (
    <>
      <h1>Product List</h1>
      <ListGroup className="productList">
        {products.map((product) => (
          <ListGroup.Item style={{ border: 0 }}>
            <h4>
              <Link
                to={`/product/${product.name}`}
              >
                {product.name}
              </Link>
            </h4>
            <h5 className="fw-normal">Price: $ {product.price}</h5>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Home;
