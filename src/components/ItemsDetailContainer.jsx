import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap'; 
import ItemsDetailnew from './Itemsdetailnew';
import { getProducto } from '../AsyncMock';
import { useParams } from 'react-router-dom';

function ItemsDetailContainer({ Productsid }) {
  const { id } = useParams();
  const [isLoading , setIsLoading] = useState(true);
  const [product, setProduct] = useState({}); 

  useEffect(() => {
    getProducto(Productsid)
      .then(result => {
        setProduct(result[0]); 
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, [id]); 

  return (
    <div>
      {isLoading ? 
        <p>LOADING...</p> : Productsid ? (
        <ItemsDetailnew
          img={product.img}
          nombre={product.nombre}
          precio={product.precio}
          stock={product.stock}
        />
      ) : (
        <p>Producto NO encontrado!</p>
      )}
    </div>
  );
}

export default ItemsDetailContainer;
