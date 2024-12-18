import React from "react";
import "./pizzacard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PizzaCard = (props) => {
  return (
    <div className="card_container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.pizza.image} />
        <Card.Body>
          <Card.Title>{props.pizza.name}</Card.Title>
          <Card.Text>
          {props.pizza.description}
          </Card.Text>
          {props.pizza.varients.map}
        </Card.Body>
      </Card>
      <div className='TailleQ'>
        <div className='DropButton'>
          
        <label for="pet-select">Taille :</label>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       { Petite}
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
    <div className='PrixAjout'>
     <label for="pet-select">Prix: 11€</label>
        <Button variant="primary">Ajouter</Button> 
    
     </div>
    </div>
  );
};

export default PizzaCard;
