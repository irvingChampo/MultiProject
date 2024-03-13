import reciclar from '../../../public/img/reciclar.webp';
import RegistroPages from '../../components/pages/CardRegistro/CardRegistro';
import './registro.css';

function Login() {
    return ( 
        <section className='bodyContainer-Registro'>
            <div className='container-Registro'>
                <div className='fondoCard1-Registro'>
                    <RegistroPages/>
                </div>
                <div className='fondoCard2-Registro'>
                    <img width={"70%"}  src={reciclar} alt="icon" />
                </div>
            </div>
        </section>
     );
}

export default Login;