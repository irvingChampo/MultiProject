import { Link } from "react-router-dom";
import Volver from "../../../../public/img/volver.png";
import escoba from "../../../../public/img/escobas.jpg";
import Header from "../../../components/pages/header/Header";
import Card from "../../../components/ui/CardCarrito/CardCarrito";
import Button from "../../../components/ui/button/Button";
import "./carrito.css";
import { useGet } from "../../../../public/hooks/useGet";
import { useEffect } from "react";

function Carrito() {

  

  const LoadingSpinner = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
      </div>
    );
  };

  let idUser = localStorage.getItem("id_usuario");

  const { data } = useGet(
    `http://44.194.73.147/api/v1/carrito/buscar/${idUser}`
  );
  
  return (
    <>
      <Header />
      <section className="ViewAdmin">
        <div className="container-cards">
          <div className="title-admin">
            <h2 className="margin0">Productos a base de llantas... </h2>
            <Link className="Link-add" to={"/Home"}>
              <img className="img-add" src={Volver} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols- gap-4 my-10">
            {data ? (
              data.carrito.productos.map((producto) => (
                <Card
                  key={producto._id}
                  textName={producto.producto.nombre}
                  descripcion={producto.producto.descripcion}
                  image={producto.producto.foto_producto}
                  value={producto.producto.cantidad}
                  id = { producto.producto.id_producto }
                  idUser = { idUser }
                  idPro = { producto.producto._id }
                />
              ))
            ) : (
              <LoadingSpinner />
            )}
          </div>

          <div className="info-carrito">
            <h2 className="acumulado">$000</h2>
            <Button size="10" size2="70">
              Pedir
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carrito;
