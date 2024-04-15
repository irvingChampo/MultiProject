import { useGet } from '../../../../public/hooks/useGet';
import escoba from '../../../../public/img/escobas.jpg';
import CardMenu from '../../../components/pages/cardMenu/CardMenu';
import CardProducto from '../../../components/pages/cardProducto/CardProducto';
import Footer from '../../../components/pages/footer/Footer';
import Header from '../../../components/pages/header/Header';
import './producto.css';
import { useParams } from 'react-router-dom';

function Producto() {
    const { id } = useParams();
    const { data } = useGet(`http://44.194.73.147/api/v1/productos/${id}`);

    const LoadingSpinner = () => {
        return (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
            </div>
        );
    };

    return (
        <section className='container-global'>
            <Header />
            <section className='container-productos-menu'>
                {data ? (
                    <>
                        <CardProducto
                               title={data.producto.nombre}
                               img={data.producto.foto_producto}
                               info={data.producto.descripcion}
                               description1="Mango:"
                               text1="· Largo, de madera y rígido."
                               description2="Cerdas:"
                               text2="Cerdas rígidas hechas 100% de botellas recicladas." 
                               id = {id}
                        />
                        <CardMenu text="Relacionado a tu búsqueda" />
                    </>
                ) : (
                    <LoadingSpinner />
                )}
            </section>

            <Footer />
        </section>
    );
}

export default Producto;
