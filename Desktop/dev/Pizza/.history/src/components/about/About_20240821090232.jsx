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
        <form>
  <label for="age">Votre âge :</label>
  <input type="number" id="age" name="age" min="0" max="120" step="1" placeholder="Entrez votre âge">
  <input type="submit" value="Soumettre">
</form>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/farmhouse.jpg" />
      <Card.Body>
        <Card.Title>Farmhouse</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="app_pizzeria/images/veggie_paradise.jpg" />
      <Card.Body>
        <Card.Title>Veggie Paradise</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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