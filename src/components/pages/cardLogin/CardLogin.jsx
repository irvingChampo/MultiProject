import { Link } from 'react-router-dom';
import TresR from '../../../../public/img/Simbolo3r.png';
import Button from '../../ui/button/Button';
import Input from '../../ui/input/Input';
import './cardLogin.css';

const card = () => (
  <div className="card">
    <img className='TresR' src={TresR} alt="Imagen de la tarjeta" />
    <div className='CardInput'>
    <Input type="text" placeholder="Usuario:" size="70" borde="5" height="4vh"/>
    <Input type="password" placeholder="Contraseña:" size="70" borde="5" height="4vh"/>
    </div>
    <Link to={'/home'} className='Link-login'>
    <Button size="100" size2="55">Login</Button>
    </Link>
    <p>Aun no tienes cuenta? Has Clic <Link to={'/registro'}>Aqui!</Link> </p>
  </div>
);

export default card;
