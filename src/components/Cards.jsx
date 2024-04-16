import React from 'react';

export const Cards = ({ title, descripcion, image }) => {


  return (
    <div className="bg-white mb-5 rounded-lg shadow-md w-96 cursor-pointer">
      <img
        className="rounded w-full"
        src={image}
        alt="Imagen del producto"
      />
      <h1 className="font-semibold mb-2">{title}</h1>
      <p className="text-gray-600">{descripcion}</p>
    </div>
  );
};
