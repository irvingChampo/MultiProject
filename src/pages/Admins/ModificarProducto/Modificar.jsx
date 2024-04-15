import Header from "../../../components/pages/HeaderAdmin/HeaderAdmin";
import Footer from "../../../components/pages/footer/Footer";
import Input from "../../../components/ui/input/Input";
import Button from "../../../components/ui/button/Button";
import Image from "../../../../public/img/image.png";
import "./modificar.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useUpdate } from "../../../../public/hooks/useUpdate";

function AddProduct() {

    const {id} = useParams()

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [caracteristicas, setCaracteristicas] = useState("")
    const [foto, setFoto] = useState("")
    const [precio, setPrecio] = useState("")
    const [categoria, setCategoria] = useState("")

    const {handleUpdate} = useUpdate(`http://44.194.73.147/api/v1/productos/${id}`)

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

              <button className="bg-green-400 rounded-md p-2 shadow-md transition-colors hover:bg-green-600" onClick={handleUpdate}>
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
