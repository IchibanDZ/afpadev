import React, { useState } from 'react';
import "./about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import "./about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import pizzas from '../../../app_pizzeria/pizza-data';

const PizzaCard = ({ name, description, image }) => {
    const [size, setSize] = useState('small');
    const [quantity, setQuantity] = useState(1);

    const handleSizeChange = (newSize) => setSize(newSize);
    const handleQuantityChange = (newQuantity) => setQuantity(newQuantity);

    const price = pizzas[name][size];
    const totalPrice = price * quantity;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className='TailleQ'>
                    <div className='DropButton'>
                        <label>Taille :</label>
                        <Dropdown onSelect={handleSizeChange}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {size === 'small' ? 'Petite' : size === 'medium' ? 'Moyenne' : 'Grande'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="small">Petite</Dropdown.Item>
                                <Dropdown.Item eventKey="medium">Moyenne</Dropdown.Item>
                                <Dropdown.Item eventKey="large">Grande</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <label>Quantité :</label>
                        <Dropdown onSelect={(e) => handleQuantityChange(Number(e))}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {quantity}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {[1, 2, 3, 4, 5].map(q => (
                                    <Dropdown.Item key={q} eventKey={q}>{q}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className='PrixAjout'>
                    <label>Prix: {totalPrice}€</label>
                    <Button variant="primary">Ajouter</Button> 
                </div>
            </Card.Body>
        </Card>
    );
};

const About = () => {
    return (
        <div className='card_container'>
            <PizzaCard 
                name="Margherita" 
                description="Garnie de sauce tomate fraîche, de mozzarella fondante et de basilic frais, créant une combinaison de saveurs parfaitement équilibrée."
                image="app_pizzeria/images/margherita.jpg" 
            />
            <PizzaCard 
                name="Farmhouse" 
                description="Célébration des légumes frais, offrant une riche combinaison de champignons, de poivrons croquants, de tomates juteuses et d'oignons rouges."
                image="app_pizzeria/images/farmhouse.jpg" 
            />
            <PizzaCard 
                name="Veggie Paradise" 
                description="Garnie de maïs doux, de poivrons verts, de tomates cerises et d'olives noires, créant une explosion de saveurs à chaque bouchée."
                image="app_pizzeria/images/veggie_paradise.jpg" 
            />
            <PizzaCard 
                name="Chicken Golden Delight" 
                description="Tentation irrésistible pour les amateurs de poulet, garnie de morceaux de poulet juteux, de maïs doux et de poivrons jaunes."
                image="app_pizzeria/images/chicken_golden_delight.jpg" 
            />
            <PizzaCard 
                name="Chicken Pepperoni" 
                description="Une variante populaire de la pizza pepperoni traditionnelle, avec du poulet épicé et du pepperoni de poulet."
                image="app_pizzeria/images/cheesepepperoni.jpg" 
            />
            <PizzaCard 
                name="Indi Chicken Tikka" 
                description="Fusion parfaite des saveurs indiennes et italiennes, garnie de morceaux de poulet tikka épicés, de poivrons et d'oignons rouges."
                image="app_pizzeria/images/IndianTandooriChickenTikka.jpg" 
            />
        </div>
    );
};

export default About;


const PizzaCard = ({ name, description, image }) => {
    const [size, setSize] = useState('small');
    const [quantity, setQuantity] = useState(1);

    const handleSizeChange = (newSize) => setSize(newSize);
    const handleQuantityChange = (newQuantity) => setQuantity(newQuantity);

    const price = pizzas[name][size];
    const totalPrice = price * quantity;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className='TailleQ'>
                    <div className='DropButton'>
                        <label>Taille :</label>
                        <Dropdown onSelect={handleSizeChange}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {size === 'small' ? 'Petite' : size === 'medium' ? 'Moyenne' : 'Grande'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="small">Petite</Dropdown.Item>
                                <Dropdown.Item eventKey="medium">Moyenne</Dropdown.Item>
                                <Dropdown.Item eventKey="large">Grande</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <label>Quantité :</label>
                        <Dropdown onSelect={(e) => handleQuantityChange(Number(e))}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {quantity}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {[1, 2, 3, 4, 5].map(q => (
                                    <Dropdown.Item key={q} eventKey={q}>{q}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className='PrixAjout'>
                    <label>Prix: {totalPrice}€</label>
                    <Button variant="primary">Ajouter</Button> 
                </div>
            </Card.Body>
        </Card>
    );
};

const About = () => {
    return (
        <div className='card_container'>
            <PizzaCard 
                name="Margherita" 
                description="Garnie de sauce tomate fraîche, de mozzarella fondante et de basilic frais, créant une combinaison de saveurs parfaitement équilibrée."
                image="app_pizzeria/images/margherita.jpg" 
            />
            <PizzaCard 
                name="Farmhouse" 
                description="Célébration des légumes frais, offrant une riche combinaison de champignons, de poivrons croquants, de tomates juteuses et d'oignons rouges."
                image="app_pizzeria/images/farmhouse.jpg" 
            />
            <PizzaCard 
                name="Veggie Paradise" 
                description="Garnie de maïs doux, de poivrons verts, de tomates cerises et d'olives noires, créant une explosion de saveurs à chaque bouchée."
                image="app_pizzeria/images/veggie_paradise.jpg" 
            />
            <PizzaCard 
                name="Chicken Golden Delight" 
                description="Tentation irrésistible pour les amateurs de poulet, garnie de morceaux de poulet juteux, de maïs doux et de poivrons jaunes."
                image="app_pizzeria/images/chicken_golden_delight.jpg" 
            />
            <PizzaCard 
                name="Chicken Pepperoni" 
                description="Une variante populaire de la pizza pepperoni traditionnelle, avec du poulet épicé et du pepperoni de poulet."
                image="app_pizzeria/images/cheesepepperoni.jpg" 
            />
            <PizzaCard 
                name="Indi Chicken Tikka" 
                description="Fusion parfaite des saveurs indiennes et italiennes, garnie de morceaux de poulet tikka épicés, de poivrons et d'oignons rouges."
                image="app_pizzeria/images/IndianTandooriChickenTikka.jpg" 
            />
        </div>
    );
};

export default About;
