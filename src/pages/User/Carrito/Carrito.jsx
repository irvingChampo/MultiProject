import { Link } from 'react-router-dom';
import Volver from '../../../../public/img/volver.png';
import escoba from '../../../../public/img/escobas.jpg';
import Header from '../../../components/pages/header/Header';
import Card from '../../../components/ui/card/Card';
import Button from '../../../components/ui/button/Button'
import './carrito.css';

function Carrito() {
    return ( 
        <>
            <Header/>
            <section className="ViewAdmin">
                <div className="container-cards">
                    <div className='title-admin'>
                        <h2 className='margin0'>Productos a base de llantas... </h2>
                        <Link className='Link-add' to={'/Home'}><img className='img-add' src={Volver}/></Link>
                    </div>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="40" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="40" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="40" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="40" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="40" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="40" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="40" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="40" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="40" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="40" image={escoba}/>
                    <div className='info-carrito'>
                        <h2 className='acumulado'>$000</h2>
                        <Button size="10" size2="70">Login</Button>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Carrito;