import React, { useState } from 'react';
import { pizzaPrices } from './screen/'; // Assurez-vous que le chemin est correct

const PizzaCard = ({ name }) => {
  const [size, setSize] = useState('small');
  const [quantity, setQuantity] = useState(1);

  const price = pizzaPrices[name][size];
  const totalPrice = price * quantity;

  return (
    <div className="pizza-card">
      <h3>{name}</h3>
      <p>Prix : {totalPrice} €</p>
      <label>
        Taille :
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <label>
        Quantité :
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button onClick={() => console.log(`Ajouté ${quantity} ${name} pizza(s) à la taille ${size} pour ${totalPrice} € au panier.`)}>
        Add
      </button>
    </div>
  );
};

const PizzaMenu = () => {
  return (
    <div className="pizza-menu">
      {['Margherita', 'Farmhouse', 'VeggieParadise', 'ChickenGoldenDelight', 'ChickenPepperoni', 'IndiChickenTikka'].map(pizza => (
        <PizzaCard key={pizza} name={pizza} />
      ))}
    </div>
  );
};

export default PizzaMenu;
