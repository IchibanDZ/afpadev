import React from "react";
import "./pizzacard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

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
        <Dropdown.Item href="#/action-1">{props.pizza.varients.map[0]}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{props.pizza.varients.map[1]}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{props.pizza.varients.map}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </div>
    </div>
  );
};

export default PizzaCard;
