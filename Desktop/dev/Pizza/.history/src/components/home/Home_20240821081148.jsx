import React from'react'
import "./home.css"

const Home =() => {
    return (
        <div>
   <Nav className="ms-auto">
            <Nav.Link href="#home">Acceuil</Nav.Link>
            <Nav.Link href="#about">A propos</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#cgv">CGV</Nav.Link>

          </Nav>
        </div>
    );
}

export default Home