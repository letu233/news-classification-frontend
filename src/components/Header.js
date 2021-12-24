import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../Tu_Logo.png";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Fake News Classifier</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <LinkContainer to="/source">
                <Nav.Link>Source Prediction</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/source">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <img src={logo} alt="error" />
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
