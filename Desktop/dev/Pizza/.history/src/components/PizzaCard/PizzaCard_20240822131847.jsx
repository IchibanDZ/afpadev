import React from 'react';
import "./pizzacard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const PizzaCard = (props) => {
    return (
        <p>{props.pizza.name}</p>
    )
}

export default PizzaCard