import './cardCarrito.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom';
import Input from '../input/Input'

// eslint-disable-next-line react/prop-types
const CardCarrito = ({textName, descripcion, size = "10", size2 = "10", image}) => (

        <>
            <div className='Card' style={{width: `${size}%`, height: `${size2}%`}}>
                <img className='img-card' src={image}/>
                <div className='text'>
                    <h2>Nombre: {textName}</h2>
                    <h2>Descripción:</h2>
                    <p>{descripcion}</p>
                    <div className='container-buttons'>
                        <Link to={'/Home/Producto'}><Button size="90" size2="100">Eliminar</Button></Link>
                        <Input className='input-cantidad' type="number" placeholder="#:" size="20" borde="5" height="2vh" bordes="2"/>
                    </div>

                </div>
            </div>
        </>
);

export default CardCarrito;