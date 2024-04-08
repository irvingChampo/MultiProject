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
                        <Link to={'/ayuda'} href='#'><img width={"70%"}  src={ayuda} alt="icon" /></Link>
                        <Link to={'/chat'}><img width={"70%"}  src={notificacion} alt="icon" /></Link>
                        <Link to={'/carrito'} href='#'><img width={"70%"}  src={carrito} alt="icon" /></Link>
                        <div className="menu">
                        <a href='#' id="menu-btn"><img width={"70%"}  src={menu} alt="icon" /></a>
                        <div className="menu-contenido">
                            <h6 className='Categoria'>Categorias</h6>
                            <Link to={'/Llantas'}>Llantas</Link>
                            <Link to={'/Pet'}>Plástico (Pet)</Link>
                            <Link to={'/Aluminio'}>Aluminio</Link>
                            <Link to={'/Bolsa'}>Plástico (bolsas)</Link>
                        </div>
                    </div>
                    </aside>
                </div>
            </nav>
        </>
     );
}

export default Header;