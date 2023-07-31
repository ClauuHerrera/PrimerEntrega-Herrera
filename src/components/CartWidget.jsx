import React from 'react';
import "./CartWidget.css";

 export function CartWidget ({items}){
    return <div className='ico'><i className="bi bi-cart">{items}</i></div>
 
};
export default CartWidget