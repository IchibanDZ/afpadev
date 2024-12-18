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
          
        <label for="size-select">Taille :</label>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Small
      </Dropdown.Toggle>

      <Dropdown.Menu>
              {props.pizza.varients.map((variant, index) => (
                <Dropdown.Item key={index} href={`#/action-${index + 1}`}>
                  {variant}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
    </Dropdown>
    <div>
    <label for="pet-select">Quantité :</label>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        1
      </Dropdown.Toggle>

      <Dropdown.Menu>
       
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </div>
    </div>
    </div>
    
  );
};

export default PizzaCard;
