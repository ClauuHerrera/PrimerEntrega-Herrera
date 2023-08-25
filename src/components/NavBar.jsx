
import CartWidget from './CartWidget';
import "./NavBar.css";
import LinkButton from './LinkButton'; 
import { Link } from 'react-router-dom';


 function NavBar() {
    return (
    
      <nav className='nav-style'>

        <Link to="/" className='brand'>
        <h2>Daylem</h2>
      </Link>
      <div className='nav-buttons'>
        <LinkButton to="/">Inicio</LinkButton>
        <LinkButton to="/categorias">Categorias</LinkButton>
        <LinkButton to="/contacto">Contacto</LinkButton>
        <LinkButton to="/nosotros">Nosotros</LinkButton>
        
      </div>
      <CartWidget items={3} />
      </nav>
    )
  };
export default NavBar
