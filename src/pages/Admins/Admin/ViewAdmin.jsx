import { Link } from "react-router-dom";
import Add from "../../../../public/img/add.png";
import escoba from "../../../../public/img/escobas.jpg";
import Header from "../../../components/pages/HeaderAdmin/HeaderAdmin";
import Card from "../../../components/ui/cardAdmin/CardAdmin";
import "./viewAdmin.css";
import { useState } from "react";
import { Modal } from "../../../components/Modal";
import { useGet } from "../../../../public/hooks/useGet";
import usePost from "../../../../public/hooks/usePost";


function ViewAdmin() {


  const [show, setShow] = useState(false);

  const { data } = useGet("http://44.194.73.147/api/v1/productos");

  const handlePressShowModal = () => {
    setShow(true);
  };

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
            <h2 className="margin0">Lista de productos</h2>
            <Link to={'/add-product'}>
            <button className="p-10 my-10">
              <img className="w-10 h-10" src={Add} alt="Agregar" />
            </button>
            </Link>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-10">
            {data ? (
              data.productos.map((producto) => (
                <Card
                  textName={producto.nombre}
                  descripcion={producto.descripcion}
                  image={producto.foto_producto}
                  id = { producto.id_producto }
                  setShow = {setShow}
                  
                />
              ))
            ) : (
              <LoadingSpinner />
            )}
          </div>
          <Modal isOpen={show} isClose={setShow}  />
        </div>
      </section>
    </>
  );
}

export default ViewAdmin;
