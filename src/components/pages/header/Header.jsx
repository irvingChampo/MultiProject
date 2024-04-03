import { Link } from 'react-router-dom';
import reciclar from '../../../../public/img/Simbolo3r.png';
import ayuda from '../../../../public/img/ayudar.png';
import carrito from '../../../../public/img/carrito.png';
import menu from '../../../../public/img/menu.png';
import notificacion from '../../../../public/img/notificacion.png';
import './header.css';



function Header() {
    return ( 
        <>
            <nav className='Header'>
                <div className='container-header'>
                    <img width={"3%"}  src={reciclar} alt="icon" />
                    <aside className='container-icons'>
                        <a href='#'><img width={"70%"}  src={ayuda} alt="icon" /></a>
                        <Link to={'/chat'}><img width={"70%"}  src={notificacion} alt="icon" /></Link>
                        <a href='#'><img width={"70%"}  src={carrito} alt="icon" /></a>
                        <div className="menu">
                        <a href='#' id="menu-btn"><img width={"70%"}  src={menu} alt="icon" /></a>
                        <div className="menu-contenido">
                            <h6 className='Categoria'>Categorias</h6>
                            <Link to={'/categoria'}>Llantas</Link>
                            <Link >Plástico (Pet)</Link>
                            <Link >Aluminio</Link>
                            <Link >Plástico (bolsas)</Link>
                        </div>
                    </div>
                    </aside>
                </div>
            </nav>
        </>
     );
}

export default Header;