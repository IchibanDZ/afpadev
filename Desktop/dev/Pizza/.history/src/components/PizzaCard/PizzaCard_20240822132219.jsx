import React from "react";
import "./pizzacard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PizzaCard = (props) => {
  return (
    <div className="card_container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={} />
        <Card.Body>
          <Card.Title>Margherita</Card.Title>
          <Card.Text>
            Garnie de sauce tomate fraîche, de mozzarella fondante et de basilic
            frais, créant une combinaison de saveurs parfaitement équilibrée.
            C'est l'essence de la simplicité, où chaque ingrédient brille par sa
            qualité
          </Card.Text>
          <div className="TailleQ">
            <div className="DropButton">
              <label for="pet-select">Taille :</label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Petite
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Petite</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Moyenne</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Grande</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <label for="pet-select">Quantité :</label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  1
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="PrixAjout">
            <label for="pet-select">Prix: 11€</label>
            <Button variant="primary">Ajouter</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PizzaCard;
