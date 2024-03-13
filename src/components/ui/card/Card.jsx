import './card.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card = ({textName, descripcion, size = "10", size2 = "10", image}) => (

        <>
            <div className='Card' style={{width: `${size}%`, height: `${size2}%`}}>
                <img className='img-card' src={image}/>
                <div className='text'>
                    <h2>Nombre: {textName}</h2>
                    <h2>Descripción:</h2>
                    <p>{descripcion}</p>
                    <Link to={'/Home/Producto'}>
                    <Button size="40" size2="15">Pedir</Button>
                    </Link>
                </div>
            </div>
        </>
);

export default Card;