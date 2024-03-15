import { Link } from 'react-router-dom';
import Add from '../../../public/img/add.png';
import escoba from '../../../public/img/escobas.jpg';
import Header from '../../components/pages/header/Header';
import Card from '../../components/ui/cardAdmin/CardAdmin';
import './viewAdmin.css';

function ViewAdmin() {
    return ( 
        <>
            <Header/>
            <section className="ViewAdmin">
                <div className="container-cards">
                    <div className='title-admin'>
                        <h2 className='margin0'>Lista de productos</h2>
                        <Link className='Link-add' to={'/AddProduct'}><img className='img-add' src={Add}/></Link>
                    </div>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="44" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="44" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="44" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="44" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="44" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="44" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="44" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="44" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="44" image={escoba}/>
                    <Card textName="Escoba" descripcion="descripcion del producto" size="17" size2="44" image={escoba}/>
                </div>
            </section>
        </>
     );
}

export default ViewAdmin;