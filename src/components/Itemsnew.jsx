import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./Itemsnew.css"

function Itemsnew({ producto }) {
  const { id, img, nombre, precio, stock } = producto;

  return (
    <div className='card'>
      <Card key={id}>
        <Card.Img className='img' variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Precio: ${precio}</Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Itemsnew;
