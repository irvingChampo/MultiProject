import escoba from '../../../../public/img/escobas.jpg';
import Card from '../../ui/card/Card';
import './cardMenu.css';

// eslint-disable-next-line react/prop-types
const CardMenu= ({text}) => (
    <>
        <div className='CardMenu'>
            <nav className='title'>
            <h1>{text}</h1>
            </nav>
            <div className='container-cards-Home'>
                <Card textName="Escoba" descripcion="descripcion del producto" size="15" size2="77" image={escoba}/>
                <Card textName="Escoba" descripcion="descripcion del producto" size="15" size2="77" image={escoba}/>
                <Card textName="Escoba" descripcion="descripcion del producto" size="15" size2="77" image={escoba}/>
                <Card textName="Escoba" descripcion="descripcion del producto" size="15" size2="77" image={escoba}/>
                <Card textName="Escoba" descripcion="descripcion del producto" size="15" size2="77" image={escoba}/>
            </div>
        </div>
    </>
);
export default CardMenu;