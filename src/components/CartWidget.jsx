import React from 'react';
import "./CartWidget.css";
import { Link } from 'react-router-dom';

 export function CartWidget ({items}){
    return <Link to={"to"}><div className='ico'>
      <i className="bi bi-cart"></i>
    <span className='cart-count'>{items}</span>
  </div></Link>
 
};
export default CartWidget