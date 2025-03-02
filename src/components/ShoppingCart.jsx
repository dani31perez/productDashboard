import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { products } from "../data/productData";
import { Link } from "react-router";

function ShoppingCart({ cart, changeCart, deleteCart }) {
  const cartSize = cart.filter((quantity) => quantity !== 0).length;

  return (
    <>
      <h1>Shopping Cart</h1>
      <ListGroup className="shoppingList mt-5 overflow-y-auto">
        {cartSize === 0 && <h4>No items in your shopping cart. </h4>}
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
                  <Col sm="6">
                    <h4 className="fw-bold">{product.name}</h4>
                    <h5 className="fw-normal">
                      Price: $ {product.price} | Quantity: {cart[index]}
                    </h5>
                  </Col>
                  <Col sm="1" className="d-flex align-items-center">
                    <h4
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => changeCart(product.name, 1)}
                    >
                      +
                    </h4>
                  </Col>
                  <Col sm="1" className="d-flex align-items-center">
                    <h4
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => changeCart(product.name, -1)}
                    >
                      -
                    </h4>
                  </Col>
                  <Col sm="4" className="d-flex align-items-center">
                    <h4
                      className=" text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteCart(product.name)}
                    >
                      REMOVE
                    </h4>
                  </Col>
                </Row>
              </ListGroup.Item>
            )
        )}
      </ListGroup>
    </>
  );
}

export default ShoppingCart;
