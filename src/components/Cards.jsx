import React from 'react';

export const Cards = ({ title, descripcion, image }) => {
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
    <div className="bg-white mb-5 rounded-lg shadow-md w-96 cursor-pointer">
      <img
        className="rounded w-full"
        src={imageUrl}
        alt="Imagen del producto"
      />
      <h1 className="font-semibold mb-2">{title}</h1>
      <p className="text-gray-600">{descripcion}</p>
    </div>
  );
};
