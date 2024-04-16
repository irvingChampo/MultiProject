import Button from '../button/Button';
import { Link } from 'react-router-dom';
import Input from '../input/Input';
import { useEffect } from 'react';
import { useDelete } from '../../../../public/hooks/useDelete';

const CardCarrito = ({ textName, descripcion, size = "20", size2 = "25", image, value, id, idUser, idPro }) =>{ 
    console.log(id);
    console.log(idUser);

    const handleEliminar = async() => {
      try {
        const res = await fetch(`http://44.194.73.147/api/v1/carrito/${idUser}/eliminar/${idPro}`,{
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
        })
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error('error', error);
      }
    }
    
return(
  <>
    <div className="bg-white shadow-md rounded-lg p-8" style={{ width: `${size}rem`, height: `${size2}rem` }}>
      <img className="w-full h-auto mb-4" src={image} alt="Imagen del producto" />
      <div className="text">
        <h2 className="font-bold text-lg mb-2">Nombre: {textName}</h2>
        <h2 className="font-bold text-lg mb-2">Descripción:</h2>
        <p>{descripcion}</p>
        <div className="flex justify-between items-center mt-2">
          <button className='bg-green-400 rounded-md shadow-md p-2 text-white hover:bg-green-600' onClick={handleEliminar}  >
            Eliminar
          </button>
          <Input className="w-1/4" type="number" placeholder="#" value={value} />
        </div>
      </div>
    </div>
  </>
)};

export default CardCarrito;
