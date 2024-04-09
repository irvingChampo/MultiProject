import { Link } from 'react-router-dom';
import reciclar from '../../../../public/img/Simbolo3r.png';
import notificacion from '../../../../public/img/notificacion.png';
import './headerAdmin.css';



function Header() {
    return ( 
        <>
            <nav className='Header'>
                <div className='container-header'>
                    <img width={"3%"}  src={reciclar} alt="icon" />
                    <aside className='container-icons-admin'>
                        <Link to={'/pedidos'}><img width={"90%"}  src={notificacion} alt="icon" /></Link>
                    </aside>
                </div>
            </nav>
        </>
     );
}

export default Header;