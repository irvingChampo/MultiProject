import React, {useState} from "react";
import usePost from "../../public/hooks/usePost";

export const Modal = ({ isOpen, setShow }) => {

  

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [caracteristicas, setCaracteristicas] = useState("")
    const [foto, setFoto] = useState("")
    const [precio, setPrecio] = useState("")
    const [categoria, setCategoria] = useState("")
  if (!isOpen) return null;

  const handlePressClose = () =>{
    setShow(false)
  }

   const productObject = {
    nombre,
    descripcion,
    cantidad,
    caracteristicas,
    foto,
    precio,
    categoria
  }

  const {handleSubmit} = usePost('http://44.194.73.147/api/v1/productos', productObject)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <form className="bg-white rounded-lg p-6 shadow-md w-96 ">
        <div className="mb-4">
          <label
            htmlFor="campo1"
            className="block text-sm font-medium text-gray-700 text-center" 
          >
            Nombre:
          </label>
          <input
            id="campo1"
            type="text"
            className="w-full border-none rounded-md shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="campo2"
            className="block text-sm font-medium text-gray-700 text-center"
          >
            Descripcion:
          </label>
          <input
            id="campo2"
            type="text"
            className="w-full border-none rounded-md shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            onChange={(e) => setDescripcion(e.target.value)}
        />
        </div>
        <div className="mb-4">
          <label
            htmlFor="campo3"
            className="block text-sm font-medium text-gray-700 text-center"
          >
            Cantidad:
          </label>
          <input
            id="campo3"
            type="text"
            className="w-full border-none rounded-md shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="campo4"
            className="block text-sm font-medium text-gray-700 text-center"
          >
            Caracteristicas:
          </label>
          <input
            id="campo4"
            type="text"
            className="w-full border-none rounded-md shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            onChange={(e) => setCaracteristicas(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <label
            htmlFor="campo4"
            className="block text-sm font-medium text-gray-700 text-center"
          >
            Foto:
          </label>
          <input
            id="campo4"
            type="text"
            className="w-full border-none rounded-md shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            onChange={(e) => setFoto(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="campo4"
            className="block text-sm font-medium text-gray-700 text-center"
          >
            Precio:
          </label>
          <input
            id="campo4"
            type="text"
            className="w-full border-none rounded-md shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="campo4"
            className="block text-sm font-medium text-gray-700 text-center"
          >
            Categoria:
          </label>
          <input
            id="campo4"
            type="text"
            className="w-full border-none rounded-md shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 mt-10">
          <button className="px-4 py-2 rounded-md shadow-lg bg-green-400 transition-colors hover:bg-green-600 text-white" onClick={handleSubmit}>
            Agregar
          </button>
          <button
            className="px-4 py-2 rounded-md shadow-lg bg-slate-400 transition-colors hover:bg-slate-500 text-white"
            onClick={handlePressClose}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};
