import React from 'react';
import Button from './button';
import CartWidget from './CartWidget';

import "./NavBar.css";


export function NavBar() {
    return (
        <nav className="navbar">
            <h2 className='titlelogo'>Daylem</h2>
            <div>
                <Button text="Inicio" />
                <Button text="contactos"/>
                <Button text="catalogo"/>
                <Button text="acerca"/>       
            </div>
            <CartWidget items="7" />
        </nav>
    );
};
