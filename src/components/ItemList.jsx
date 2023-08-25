import React from 'react';
import Itemsnew from './Itemsnew';
import "./ItemsList.css";

function ItemList({ productos }) {
   console.log(productos); 

    return (
        <div>
            <h2>Productos</h2>
            <div className='productos'>
            {productos.map(prod => <Itemsnew key={prod.id}producto={prod}/>)}
            </div>
        </div>
    ); 
}

export default ItemList;
