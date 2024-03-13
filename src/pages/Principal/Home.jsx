import mundo from '../../../public/img/mundo.png';
import recicla from '../../../public/img/recicla.png';
import CardMenu from '../../components/pages/cardMenu/CardMenu';
import Footer from '../../components/pages/footer/Footer';
import Header from '../../components/pages/header/Header';
import './home.css';
function Home() {
    return ( 
        <>
            <section className='Home'>
                <Header/>
                <section className='Body'>
                <div className='container-info'>
                    <div className='info-left'>
                        <div className='text-info'>
                            <h2>PET</h2>
                            <p>El reciclaje es esencial porque ahorra energía, reduce las emisiones de gases de efecto invernadero, conserva los recursos naturales, impulsa la innovación y la creación de productos, y genera empleo. Además, las botellas recicladas pueden ser reutilizadas de diversas formas creativas, contribuyendo a un futuro más sostenible.</p>
                        </div>
                        <img className='img-info'  src={recicla} alt="icon" />
                    </div>
                    <div className='info-right'>
                        <div className='text-info'>
                            <h2>Medio ambiente</h2>
                            <p>En México, se estima que se generan diariamente 38,351 toneladas de residuos aprovechables mediante el reciclaje o la recuperación de energía</p>
                        </div>
                        <img className='img-info'  src={mundo} alt="icon" />
                    </div>
                </div>
                <CardMenu text="Lo mas vendido"/>
                <CardMenu text="Agregado recientemente"/>
                <CardMenu text="Favoritos"/>
                </section>
                <Footer/>
            </section>
        </>
     );}
export default Home;