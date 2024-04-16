import { Link } from "react-router-dom";
import Header from "../../../components/pages/HeaderAdmin/HeaderAdmin";
import { useEffect, useState } from "react";

const Tabla = ({ datos }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const api = async () => {
      try {
        const res = await fetch(
          "http://44.194.73.147/api/v1/usuarios/usuarios",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("error al traer la informacion", error);
      }
    };

    api();
  }, []);

  const LoadingSpinner = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <Link to={'/admin'}>
          <button className="flex items-center p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Regresar
          </button>
        </Link>
      <section className="container mx-auto p-4 mt-10">
      

        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th scope="col" className="py-2 px-4">
                Número
              </th>
              <th scope="col" className="py-2 px-4">
                Nombre de Usuario
              </th>
              <th scope="col" className="py-2 px-4">
                Información de Productos
              </th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.usuarios.map((fila, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-100 text-center"
                      : "bg-white text-center"
                  }
                >
                  <td className="py-2 px-6">{index + 1}</td>
                  <td className="py-2 px-6">
                    {fila.nombre}{" "}
                    <Link to={"/chat"} className="text-blue-500 ml-2">
                      Chat
                    </Link>
                  </td>
                  <td className="py-2 px-6">
                    {fila.carrito && fila.carrito.length > 1
                      ? `Cantidad: ${fila.carrito.length}`
                      : "No tiene productos agregados"}
                  </td>
                </tr>
              ))
            ) : (
              <LoadingSpinner />
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Tabla;
