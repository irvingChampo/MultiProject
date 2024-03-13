import reciclar from '../../../../public/img/Simbolo3r.png';
import x from '../../../../public/img/x.png'
import instagram from '../../../../public/img/instagram.png'
import './footer.css';

function Footer() {
    return ( 
        <>
            <nav className='Footer'>
                <div className='container-footer'>
                    <img width={"2.5%"}  src={reciclar} alt="icon" />
                    <aside className='container-icons-footer'>
                        <a href='#'><img width={"35%"}  src={instagram} alt="icon" /></a>
                        <a href='#'><img width={"35%"}  src={x} alt="icon" /></a>
                    </aside>
                </div>
            </nav>
        </>
     );
}

export default Footer;