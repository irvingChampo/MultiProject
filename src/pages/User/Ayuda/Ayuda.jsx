import './ayuda.css'
import Header from '../../../components/pages/header/Header'
import VideoPrueba from '../../../../public/img/videoPrueba.mp4'

function Ayuda() {
    return ( 
        <>
            <Header/>
            <section className='container-ayuda'>
                <div className='container-info-ayuda'>
                    <h1>Ayuda...</h1>
                    <p>En este apartado encontraras todo lo que necesitas saber hacerca de nuestra pagina </p>
                    <div className='container-video-pdf'>
                        <video className='video' loop autoPlay muted controls >
                            <source src={VideoPrueba} type="video/mp4"></source>
                        </video>
                        <iframe src="https://drive.google.com/file/d/1OMLHMrmeURhOaYEVbl31dUWVvRRm2cP2/preview" width="40%" height="70%" allow="autoplay"></iframe>                    </div>
                </div>
            </section>
        </>
     );
}
export default Ayuda;