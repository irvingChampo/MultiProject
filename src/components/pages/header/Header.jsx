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
                <div className='container-header flex items-center justify-between'>
                    <img className="w-8" src={reciclar} alt="icon" />
                    <aside className='container-icons flex items-center gap-x-4'>
                        <Link to={'/ayuda'} href='#'><img className="w-8" src={ayuda} alt="icon" /></Link>
                        <Link to={'/chat'}><img className="w-8" src={notificacion} alt="icon" /></Link>
                        <Link to={'/carrito'} href='#'><img className="w-8" src={carrito} alt="icon" /></Link>
                        <div className="menu relative">
                            <a href='#' id="menu-btn"><img className="w-8" src={menu} alt="icon" /></a>
                            <div className="menu-contenido absolute bg-white shadow-md p-2 rounded-lg hidden">
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
