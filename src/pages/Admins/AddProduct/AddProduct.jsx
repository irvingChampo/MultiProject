import Header from '../../../components/pages/HeaderAdmin/HeaderAdmin';
import Footer from '../../../components/pages/footer/Footer'
import Input from '../../../components/ui/input/Input'
import Button from '../../../components/ui/button/Button'
import Image from '../../../../public/img/image.png'
import './addProduct.css'
import { Link } from 'react-router-dom'

function AddProduct() {
    return ( 
        <>
            <Header/>
            <section className='container-form'>
                <div className='form'>
                    <div className='form-image'>
                        <img src={Image} className='img-form' />
                        <div className='container-input'>
                            <span>Seleccionar archivo</span>
                            <Input type="file" size="100" borde="4" height="4vh" />
                        </div>
                    </div>
                    <Input type="text" placeholder="Nombre:" size="70" borde="5" height="5vh" />
                    <Input type="text" placeholder="Categoria:" size="70" borde="5" height="5vh" />
                    <Input type="number" placeholder="Precio:" size="70" borde="5" height="5vh" />
                    <Input type="text" placeholder="Descripción:" size="70" borde="5" height="5vh" />
                    <div className='container-button'>
                        <Link className='Link-add-admin' to={'/admin'}><Button size="100" size2="100" backgroundColor="red">Cancelar</Button></Link>
                        <Link className='Link-add-admin' to={'/admin'}><Button size="100" size2="100" backgroundColor="green">Agregar</Button></Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
     );
}

export default AddProduct;