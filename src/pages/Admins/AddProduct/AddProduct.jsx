import Header from "../../../components/pages/HeaderAdmin/HeaderAdmin";
import Footer from "../../../components/pages/footer/Footer";
import Input from "../../../components/ui/input/Input";
import Button from "../../../components/ui/button/Button";
import Image from "../../../../public/img/image.png";
import "./addProduct.css";
import { Link } from "react-router-dom";
import usePost from "../../../../public/hooks/usePost";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function AddProduct() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [caracteristicas, setCaracteristicas] = useState("")
    const [foto, setFoto] = useState("")
    const [precio, setPrecio] = useState("")
    const [categoria, setCategoria] = useState("")

    const id_producto = uuidv4();

   const productObject = {
    id_producto,
    nombre,
    descripcion,
    cantidad,
    caracteristicas:caracteristicas,
    foto_producto:foto,
    precio,
    categoria
  }

    const { handleSubmit } = usePost('http://44.194.73.147/api/v1/productos',productObject )

  return (
    <>
      <Header />
      <section className="container-form">
        <div className="form">
          <div className="form-image">
            <img src={Image} className="img-form" />
          </div>
          <Input
            type="text"
            placeholder="Nombre:"
            size="70"
            borde="5"
            height="5vh"
            setState={setNombre}
          />
          <Input
            type="text"
            placeholder="Categoria:"
            size="70"
            borde="5"
            height="5vh"
            setState={setCategoria}
          />
          <Input
            type="number"
            placeholder="Precio:"
            size="70"
            borde="5"
            height="5vh"
            setState={setPrecio}
          />
          <Input
            type="text"
            placeholder="Descripción:"
            size="70"
            borde="5"
            height="5vh"
            setState={setCaracteristicas}
            />
          <Input
            type="text"
            placeholder="Descripción:"
            size="70"
            borde="5"
            height="5vh"
            setState={setDescripcion}
          />
          <Input
            type="number"
            placeholder="En existencia:"
            size="70"
            borde="5"
            height="5vh"
            setState={setCantidad}
          />
          <Input
            type="text"
            placeholder="URL FOTO:"
            size="70"
            borde="5"
            height="5vh"
            setState={setFoto}
            />
          <div className="container-button">
            <Link className="Link-add-admin" to={"/admin"}>
              <button className="bg-red-500 rounded-md p-2 shadow-md transition-colors hover:bg-red-800">
                Cancelar
              </button>
            </Link>

              <button className="bg-green-400 rounded-md p-2 shadow-md transition-colors hover:bg-green-600" onClick={handleSubmit}>
                Agregar
              </button>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AddProduct;
