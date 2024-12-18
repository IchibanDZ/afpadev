import React from'react'
import "./home.css"
import About from '../about/About';
import PizzaCard from '../PizzaCard/PizzaCard';
import pizzas from '../path/to/pizza-data.js';

const Home =() => {
    return (<>
    <div className='Entete row d-flex align-items-center justify-content-between m-3'>
        <img className='PizzadeLamama col-3' src="app_pizzeria/images/White_pizza-logo_250x250.jpg" alt="Logo PIZZA Delicious" />
        <ul className='col-9 d-flex justify-content-end list-unstyled'>
            <li className='mx-5'>Login</li>
            <li className='mx-5'>Panier</li>
        </ul>
    </div>
    [pizzas.map (pizza)
    <PizzaCard/>
    </>
    );
}

export default Home