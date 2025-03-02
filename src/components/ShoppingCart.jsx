import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { products } from "../data/productData";

function ShoppingCart({ cart, addCart, changeCart }) {
  return (
    <>
      <h1>Shopping Cart</h1>
      <ListGroup className="shoppingList mt-5 overflow-y-auto">
        {products.map(
          (product, index) =>
            cart[index] !== 0 && (
              <ListGroup.Item
                style={{
                  border: 0,
                  marginBottom: index !== cart.length - 1 ? "2rem" : "",
                }}
              >
                <Row>
                  <Col>
                    <h4 className="fw-bold">{product.name}</h4>
                    <h5 className="fw-normal">
                      Price: $ {product.price} | Quantity: {cart[index]}
                    </h5>
                  </Col>
                  <Col></Col>
                </Row>
              </ListGroup.Item>
            )
        )}
      </ListGroup>
    </>
  );
}

export default ShoppingCart;
