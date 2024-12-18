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
          
        </Card.Body>
      </Card>
      <div className='TailleQ'>
        <div className='DropButton'>
          
        <label for="pet-select">Taille :</label>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Small
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Petite</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Moyenne</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Grande</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </div>
    </div>
  );
};

export default PizzaCard;
