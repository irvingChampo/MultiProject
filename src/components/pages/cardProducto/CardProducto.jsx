import { Link } from 'react-router-dom';
import Button from '../../ui/button/Button'
import './cardProducto.css'

// eslint-disable-next-line react/prop-types
const CardProducto =  ({title, img, info, description1,text1, description2, text2}) => (
        <>
            <section className="container-productos">
            <div className='container-links'>
                <Link className='Link' to={'/Home'}>/Home</Link>
                <Link className='Link' to={'/Home/Producto'}>/Producto</Link>
            </div>
                <div className="container-left-producto">
                        <img className='image-producto' src={img} />
                        <div className="text-producto">
                            <h2>{title}</h2>
                            <h2>Description:</h2>
                            <p>{info}</p>
                            <Button size="15" size2="10">Pedir</Button>
                        </div>
                </div>
                <div className="container-right-producto">
                    <div className='container-info-text'>
                        <h2>Caracteristicas:</h2>
                        <h4>{description1}</h4>
                        <p>{text1}</p>
                        <h4>{description2}</h4>
                        <p>{text2}</p>
                    </div>
                </div>
            </section>
        </>
     );

export default CardProducto;