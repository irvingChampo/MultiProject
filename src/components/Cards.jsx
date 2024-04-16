import React from "react";
import { Link } from "react-router-dom";


export const Cards = ({ title, descripcion, image, id }) => {
  return (
    <div className="bg-white mb-5 rounded-lg shadow-md w-96 cursor-pointer">
      <img className="rounded w-full" src={image} alt="Imagen del producto" />
      <h1 className="font-semibold mb-2">{title}</h1>
      <p className="text-gray-600">{descripcion}</p>
      <Link to={`/Home/Producto/${id}`}>
        <button className="bg-green-400 rounded-md shadow-md w-full p-4 transition-colors hover:bg-green-600 text-white">
          Pedir
        </button>
      </Link>
    </div>
  );
};
