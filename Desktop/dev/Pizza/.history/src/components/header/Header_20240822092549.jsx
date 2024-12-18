import React from 'react';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { MdLocalOffer } from "react-icons/md";

const Header = () => {
    return (
        <div>
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><MdLocalOffer /> Livraison gratuite à domicile à partir de 50 €</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
            <Nav.Link>Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/a">
            <Nav.Link>A propos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cgv">
            <Nav.Link>CGV</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default Header;