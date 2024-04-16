import React, { useState } from "react";
import { Link } from "react-router-dom";
import estrellas from "../../../../public/img/estrellas.png";
import Button from "../../ui/button/Button";
import "./cardProducto.css";
import usePost from "../../../../public/hooks/usePost";

const CardProducto = ({
  title,
  img,
  info,
  description1,
  text1,
  description2,
  text2,
  id
}) => {

  const [alertShown, setAlertShown] = useState(false);


  const idUser = localStorage.getItem('id_usuario');
  console.log('id_user', idUser);
  console.log("product_id", id);

  const postObject ={
    cantidadProducto: 1
  }
  
  const { handleSubmit, error, information } = usePost(`http://44.194.73.147/api/v1/carrito/${idUser}/agregar/${id}`, postObject)

  if(information ){ // Verifica si information tiene un valor y si la alerta aún no se ha mostrado
   alert('aaa')
  }

  
  return (
    <>
      <div className="flex gap-x-4">
        <Link className="Link" to={"/home"}>
          Home
        </Link>
        <Link className="Link" to={"/home/producto"}>
          Producto
        </Link>
      </div>
      <section className="container-productos">
        <div className="container-left-producto">
          <img
            className="image-producto"
            src={img}
            alt="Imagen del producto"
          />
          <div className="text-producto">
            <h2>{title}</h2>
            <h2>Description:</h2>
            <p>{info}</p>
            <button className="bg-green-400 rounded-md shadow-md w-full p-4 transition-colors hover:bg-green-600 text-white" onClick={ handleSubmit } >
              Pedir
            </button>
          </div>
        </div>
        <div className="container-right-producto">
          <div className="container-info-text">
            <h2 className="margin0">Caracteristicas:</h2>
            <h4 className="margin-null">{description1}</h4>
            <p>{text1}</p>
            <h4 className="margin-null">{description2}</h4>
            <p>{text2}</p>
            <img className="star" src={estrellas} alt="Estrellas" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardProducto;
