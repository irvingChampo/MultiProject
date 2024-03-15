import escoba from '../../../public/img/escobas.jpg'
import CardMenu from '../../components/pages/cardMenu/CardMenu'
import CardProducto from '../../components/pages/cardProducto/CardProducto'
import Footer from '../../components/pages/footer/Footer'
import Header from '../../components/pages/header/Header'
import './producto.css'

function Producto() {
    return ( 
        <section className='container-global'>
            <Header/>
            <section className='container-productos-menu'>
                <CardProducto img={escoba} title='Escoba' info='Este es un producto 100% hecho con botellas recicladas.' description1={'Mango:'} text1={'·Largo, de madera y rigido.'} description2={'Cerdas:'} text2={'Cerdas rigidas hechas 100% de botellasrecicladas.'} />
                <CardMenu text="Relacionado a tu búsqueda"/>
            </section>

            <Footer/>
        </section>
     );
}

export default Producto;