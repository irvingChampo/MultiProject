import Button from '../button/Button';
import { Link } from 'react-router-dom';
import Input from '../input/Input';
import { useEffect } from 'react';
import { useDelete } from '../../../../public/hooks/useDelete';

const CardCarrito = ({ textName, descripcion, size = "20", size2 = "25", image, value, id }) =>{ 
    console.log(id);

    // URL de la imagen predeterminada
   const defaultImage = "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg";

   // Función para validar la URL
   const isValidUrl = (url) => {
     // Expresión regular para validar la URL
     const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
     return urlPattern.test(url);
   };
 
   // Verifica si la imagen es una URL válida o está vacía y establece la imagen predeterminada si es así
   const imageUrl = isValidUrl(image) ? image : defaultImage;
    
return(
  <>
    <div className="bg-white shadow-md rounded-lg p-8" style={{ width: `${size}rem`, height: `${size2}rem` }}>
      <img className="w-full h-auto mb-4" src={imageUrl} alt="Imagen del producto" />
      <div className="text">
        <h2 className="font-bold text-lg mb-2">Nombre: {textName}</h2>
        <h2 className="font-bold text-lg mb-2">Descripción:</h2>
        <p>{descripcion}</p>
        <div className="flex justify-between items-center mt-2">
          <button className='bg-green-400 rounded-md shadow-md p-2 text-white hover:bg-green-600' >
            Eliminar
          </button>
          <Input className="w-1/4" type="number" placeholder="#" value={value} />
        </div>
      </div>
    </div>
  </>
)};

export default CardCarrito;
