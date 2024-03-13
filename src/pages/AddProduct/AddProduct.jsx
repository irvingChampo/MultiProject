import Header from '../../components/pages/header/Header'
import Footer from '../../components/pages/footer/Footer'
import Input from '../../components/ui/input/Input'
import Button from '../../components/ui/button/Button'
import Image from '../../../public/img/image.png'
import './addProduct.css'

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
                        <Button size="30" size2="65" backgroundColor="red">Cancelar</Button>
                        <Button size="30" size2="65" backgroundColor="green">Agregar</Button>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
     );
}

export default AddProduct;