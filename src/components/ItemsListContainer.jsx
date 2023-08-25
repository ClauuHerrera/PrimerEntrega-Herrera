import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { getProducts } from '../AsyncMock';
import ItemList from './ItemList';
import Categorias from '../Pages/Categorias';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { id } = useParams();
  const [isLoading , setIsLoading] = useState (true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(fetchedProducts => {
        setProducts(fetchedProducts); 
        console.log(fetchedProducts)
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      <ItemList productos={products}/> 
    </div>
  )
  
  
}

export default ItemListContainer;
