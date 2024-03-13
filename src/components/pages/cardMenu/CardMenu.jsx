import './cardMenu.css'
import Card from '../../ui/card/Card'
import escoba from '../../../../public/img/escobas.jpg'

// eslint-disable-next-line react/prop-types
const CardMenu= ({text}) => (
    <>
        <div className='CardMenu'>
            <nav className='title'>
            <h1>{text}</h1>
            </nav>
            <div className='container-cards'>
                <Card textName="Escoba" descripcion="descripcion del producto" size="15" size2="75" image={escoba}/>
                <Card textName="Escoba" descripcion="descripcion del producto" size="15" size2="75" image={escoba}/>
                <Card textName="Escoba" descripcion="descripcion del producto" size="15" size2="75" image={escoba}/>
                <Card textName="Escoba" descripcion="descripcion del producto" size="15" size2="75" image={escoba}/>
                <Card textName="Escoba" descripcion="descripcion del producto" size="15" size2="75" image={escoba}/>
            </div>
        </div>
    </>
);
export default CardMenu;