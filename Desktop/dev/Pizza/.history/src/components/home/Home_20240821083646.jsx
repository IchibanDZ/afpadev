import React from'react'
import "./home.css"

const Home =() => {
    return (<div className='row'>
        <img className='PizzadeLamama col-3' src="app_pizzeria/images/White_pizza-logo_250x250.jpg" alt="Logo PIZZA Delicious" />
        
            <ul className='col-8'>
               <li>Login</li>
     <li>Panier</li> 
            </ul>
    
     </div>
   
    );
}

export default Home