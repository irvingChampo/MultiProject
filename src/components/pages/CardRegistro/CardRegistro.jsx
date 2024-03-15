import Button from '../../ui/button/Button';
import Input from '../../ui/input/Input';
import './cardRegistro.css';
import TresR from '../../../../public/img/Simbolo3r.png';
import { Link } from 'react-router-dom';

function Registro() {
    return ( 
        <div className="card-Registro">
          <div className='image-Registro'>
            <img className='TresR-Registro' src={TresR} alt="Imagen de la tarjeta" />
          </div>
          <div className='CardInput-Registro'>
            <Input type="text" placeholder="Nombre:" size="40" height='' borde='5'/>
            <Input type="email" placeholder="correo:" size="40" height='' borde='5'/>
            <Input type="text" placeholder="Usuario:" size="40" height='' borde='5'/>
            <Input type="text" placeholder="Apellido(s)" size="40" height='' borde='5'/>
            <Input type="number" placeholder="Telefono:" size="40" height='' borde='5'/>
            <Input type="password" placeholder="Contraseña:" size="40" height='' borde='5'/>
          </div>
          <Link to={'/Home'} className='Link-registro'>
            <Button size="50" size2="50">Registrarme</Button>
          </Link>
      </div>
     );
}

export default Registro;