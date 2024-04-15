import React from 'react'
import mundo from "../../public/img/mundo.png";
import recicla from "../../public/img/recicla.png";

export const Descripcion = () => {
  return (
    <div className="w-full h-full bg-green-400 p-6 rounded-md flex justify-center items-center mt-10">
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">PET</h2>
        <p className="text-gray-700">
          El reciclaje es esencial porque ahorra energía, reduce las
          emisiones de gases de efecto invernadero, conserva los
          recursos naturales, impulsa la innovación y la creación de
          productos, y genera empleo. Además, las botellas recicladas
          pueden ser reutilizadas de diversas formas creativas,
          contribuyendo a un futuro más sostenible.
        </p>
      </div>
      <div>
      <img className="mx-auto" src={recicla} alt="icon" />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Medio ambiente</h2>
        <p className="text-gray-700">
          En México, se estima que se generan diariamente 38,351
          toneladas de residuos aprovechables mediante el reciclaje o la
          recuperación de energía
        </p>
      </div>
      <img className="mx-auto" src={mundo} alt="icon" />
    </div>
  </div>
  )
}
