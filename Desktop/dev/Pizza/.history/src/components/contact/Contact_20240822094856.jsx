import React from 'react'
import Table from 'react-bootstrap/Table';

const Contact = () => {
  return (
    <div>
    <h1>Pizza Delicious</h1>
    <h2>Notre Adresse</h2>
    <p>103, Rue de l'Arnaque</p>
    <p>75021 Paris</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam sapiente, blanditiis architecto quos, labore hic natus reprehenderit earum nostrum harum in impedit aliquam quaerat debitis! Ipsum a nisi ex aliquam architecto, deleniti autem iusto sint labore nulla consequuntur officia nobis! Perferendis maxime aspernatur quia iste excepturi neque asperiores nobis!</p>
    function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

    </div>
  )
}

export default Contact
