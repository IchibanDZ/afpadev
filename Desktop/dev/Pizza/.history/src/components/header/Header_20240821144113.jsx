import React from 'react';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
            <Nav.Link href="#home">Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link href="#about">A propos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
            <Nav.Link href="#contact">Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/co"></LinkContainer><Nav.Link href="#cgv">CGV</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default Header