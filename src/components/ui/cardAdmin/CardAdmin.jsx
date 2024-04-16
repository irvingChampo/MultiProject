import modificar from "../../../../public/img/boton-editar.png";
import eliminar from "../../../../public/img/boton-eliminar.png";
import { useDelete } from "../../../../public/hooks/useDelete";
import { useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ textName, descripcion, size = "20", size2 = "30", image, id }) => {
    const [view, setView] = useState(false)

  const { handleSubmit } = useDelete(`http://44.194.73.147/api/v1/productos/${id}`, localStorage.getItem('token'))
  

  return (
    <>
      <div
        className="bg-white shadow-lg rounded-lg p-8"
        style={{ width: `${size}rem`, height: `${size2}rem` }}
      >
        <img
          className="w-full h-auto mb-4"
          src={image}
          alt="Imagen del producto"
        />
        <div className="text">
          <h2 className="font-bold text-lg mb-2">Nombre: {textName}</h2>
          <h2 className="font-bold text-lg mb-2">Descripción:</h2>
          <p>{descripcion}</p>
          <div className="flex justify-between items-center mt-4">
              <button onClick={handleSubmit}>
                <img className="w-6 h-6" src={eliminar} alt="Eliminar" />
              </button>

              <Link to={`/modificar-producto/${id}`}>
              <button >
                <img className="w-6 h-6" src={modificar} alt="Modificar" />
              </button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
