import { Link } from "react-router-dom";
import escoba from "../../../../../public/img/escobas.jpg";
import Volver from "../../../../../public/img/volver.png";
import Header from "../../../../components/pages/header/Header";
import Card from "../../../../components/ui/card/Card";
import "./pet.css";
import { useGet } from "../../../../../public/hooks/useGet";

function Pet() {
  const { data } = useGet(
    "http://44.194.73.147/api/v1/productos/por-categoria/pet"
  );
  console.log(data);

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
      <section className="ViewAdmin">
        <div className="container-cards">
          <div className="title-admin">
            <h2 className="margin0">Productos a base de llantas... </h2>
            <Link className="Link-add" to={"/Home"}>
              <img className="img-add" src={Volver} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {data ? (
              data.productos.map((producto) => (
                <Card
                  key={producto._id}
                  textName={producto.nombre}
                  descripcion={producto.descripcion}
                  image={
                    producto.foto_producto ||
                    "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
                  }
                  id={producto.id_producto}
                />
              ))
            ) : (
              <LoadingSpinner />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pet;
