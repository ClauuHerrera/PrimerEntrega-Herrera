
import React from 'react';
import { Link } from 'react-router-dom';
import "./LinkButton.css";
 function LinkButton ({ to, children }) {
    return (
      <Link to={to}>
        <button className='Buttonstyle'>
          {children}
        </button>
      </Link>
    )
  };
  export default LinkButton;
 
  
