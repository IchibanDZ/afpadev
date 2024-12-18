import React from'react';
import "./about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const About =() => {
    return (
        <div className='card_container'>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/margherita.jpg" />
      <Card.Body>
        <Card.Title>Margherita</Card.Title>
        <Card.Text>
        Garnie de sauce tomate fraîche, de mozzarella fondante et de basilic frais, créant une combinaison de saveurs parfaitement équilibrée. C'est l'essence de la simplicité, où chaque ingrédient brille par sa qualité
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/farmhouse.jpg" />
      <Card.Body>
        <Card.Title>Farmhouse</Card.Title>
        <Card.Text>
        Célébration des légumes frais, offrant une riche combinaison de champignons, de poivrons croquants, de tomates juteuses et d'oignons rouges. Parfaitement complémentée par une généreuse couche de fromage, chaque bouchée est un mélange savoureux de fraîcheur et de réconfort.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/veggie_paradise.jpg" />
      <Card.Body>
        <Card.Title>Veggie Paradise</Card.Title>
        <Card.Text>
        garnie de maïs doux, de poivrons verts, de tomates cerises et d'olives noires, créant une explosion de saveurs à chaque bouchée. Parfaite pour les amateurs de légumes qui veulent une expérience gustative riche et variée.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/chicken_golden_delight.jpg" />
      <Card.Body>
        <Card.Title>Chicken Golden Delight</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/cheesepepperoni.jpg" />
      <Card.Body>
        <Card.Title>Chicken Pepperoni</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/IndianTandooriChickenTikka.jpg" />
      <Card.Body>
        <Card.Title>Indi Chicken Tikka</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    )
}

export default About