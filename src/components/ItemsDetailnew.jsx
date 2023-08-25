import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./Itemsnew.css"



function ItemsDetailnew({ img, nombre , precio , stock }) {
    
  
    return (
      <div className='card'>
        <Card key={id}>
          <Card.Img className='img' variant="top" src={img.id} />
          <Card.Body>
            <Card.Title>{nombre.id}</Card.Title>
            <Card.Text>Precio: ${precio.id}</Card.Text>
            <Card.Text>Stock: {stock.id}</Card.Text>
            <Button variant="primary">Agregar al carrito</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default ItemsDetailnew;