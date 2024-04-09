import './card.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom';
import modificar from '../../../../public/img/boton-editar.png'
import eliminar from '../../../../public/img/boton-eliminar.png'

// eslint-disable-next-line react/prop-types
const Card = ({textName, descripcion, size = "10", size2 = "10", image}) => (

        <>
            <div className='Card' style={{width: `${size}%`, height: `${size2}%`}}>
                <img className='img-card' src={image}/>
                <div className='text'>
                    <h2>Nombre: {textName}</h2>
                    <h2>Descripción:</h2>
                    <p>{descripcion}</p>
                    <div className='buttons-add'>
                        <Link className='Link-modificar' to={''}><Button size="100" size2="70" backgroundColor='transparent'><img className='img-modificar' src={eliminar}/></Button></Link>
                        <Link className='Link-modificar' to={'/modificar-producto'}><Button size="100" size2="70" backgroundColor='transparent'><img className='img-modificar' src={modificar}/></Button></Link>
                    </div>
                </div>
            </div>
        </>
);

export default Card;