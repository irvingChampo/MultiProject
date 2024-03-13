import InicioSesion from '../../components/pages/cardLogin/CardLogin';
import './login.css';
import reciclar from '../../../public/img/reciclar.webp';

function Login() {
    return ( 
        <section className='bodyContainer'>
        <div className='container'>
        <div className='fondoCard1'>
        <InicioSesion/>
        </div>
        <div className='fondoCard2'>
        <img width={"70%"}  src={reciclar} alt="icon" />
        </div>
        </div>
        </section>
     );
}

export default Login;