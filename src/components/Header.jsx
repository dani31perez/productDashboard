import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

function Header({ cartSize }) {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="sm"
      className="bg-body-tertiary mb-5 p-0"
    >
      <Container className="mx-4 p-0" fluid={true}>
        <Navbar.Brand as={Link} to="/home">
          Product Dashboard
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shoppingCart">
              View Cart ({cartSize})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
