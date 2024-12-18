import React from'react';
import "./about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';


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
        <div className='DropButton'>
        <label for="pet-select">Taille :</label>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Petite</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Moyenne</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Grande</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <label for="pet-select">Quantité:</label>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
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
        Garnie de maïs doux, de poivrons verts, de tomates cerises et d'olives noires, créant une explosion de saveurs à chaque bouchée. Parfaite pour les amateurs de légumes qui veulent une expérience gustative riche et variée.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/chicken_golden_delight.jpg" />
      <Card.Body>
        <Card.Title>Chicken Golden Delight</Card.Title>
        <Card.Text>
        Tentation irrésistible pour les amateurs de poulet. Elle est garnie de morceaux de poulet juteux, de maïs doux et de poivrons jaunes, le tout sur une base de fromage fondant. Le mélange de saveurs sucrées et salées crée une harmonie délicieuse qui enchante le palais.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/cheesepepperoni.jpg" />
      <Card.Body>
        <Card.Title>Chicken Pepperoni</Card.Title>
        <Card.Text>
        Une variante populaire de la pizza pepperoni traditionnelle, où les tranches de pepperoni sont remplacées par du poulet épicé. Cette pizza est recouverte de morceaux de poulet savoureux et de tranches de pepperoni de poulet, offrant une expérience gustative riche en épices, complétée par une couche généreuse de fromage fondu.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/IndianTandooriChickenTikka.jpg" />
      <Card.Body>
        <Card.Title>Indi Chicken Tikka</Card.Title>
        <Card.Text>
        Fusion parfaite des saveurs indiennes et italiennes. Elle est garnie de morceaux de poulet tikka marinés dans des épices indiennes, accompagnés de poivrons et d'oignons rouges. Le tout est posé sur une base de sauce tomate et recouvert de fromage, offrant une expérience gustative épicée et exotique, parfaite pour les amateurs de cuisine fusion.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    )
}

<select>
  <option value="someOption">Une option</option>
  <option value="otherOption">Une autre option</option>
</select>

export default About