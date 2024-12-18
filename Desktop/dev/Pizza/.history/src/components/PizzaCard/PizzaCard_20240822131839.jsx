import React from 'react';
import "./pizzacard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const PizzaCard = (props) => {
    return (
        <p>{props.pizzacard}</p>
    )
}

export default PizzaCard