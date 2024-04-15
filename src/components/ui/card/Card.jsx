import React from "react";
import { Link } from "react-router-dom";

const Card = ({ textName, descripcion, size = "20", size2 = "35", image, id }) => {
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

  return (
    <>
      <div
        className="bg-white shadow-md rounded-lg p-8"
        style={{ width: `${size}rem`, height: `${size2}rem` }}
      >
        <img className="rounded w-full" src={imageUrl} alt="Imagen del producto" />
        <div className="text-gray-800 mt-8">
          <h2 className="font-bold text-2xl mb-4">Nombre: {textName}</h2>
          <h2 className="font-bold text-2xl mb-4">Descripción:</h2>
          <p className="text-lg">{descripcion}</p>
          <Link to={`/Home/Producto/${id}`}>
            <button className="bg-green-400 rounded-md shadow-md w-full p-4 transition-colors hover:bg-green-600 text-white">
              Pedir
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
