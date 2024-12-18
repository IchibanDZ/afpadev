import React from'react'
import "./home.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Home =() => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><MdLocalOffer />Livraison gratuite à domicile à partir de 50 €</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Acceuil</Nav.Link>
              <Nav.Link href="#about">A propos</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#cgv">CGV</Nav.Link>
  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Home