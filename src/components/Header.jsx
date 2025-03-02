import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="sm" className="bg-body-tertiary mb-5 p-0">
      <Container  className="mx-4 p-0" fluid={true}>
        <Navbar.Brand href="/home">Product Dashboard</Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse >
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/home">View Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
