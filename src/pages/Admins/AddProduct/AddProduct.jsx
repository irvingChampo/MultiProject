import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "../../../components/pages/HeaderAdmin/HeaderAdmin";
import Footer from "../../../components/pages/footer/Footer";
import Input from "../../../components/ui/input/Input";
import Image from "../../../../public/img/image.png";
import usePost from "../../../../public/hooks/usePost";
import "./addProduct.css";

function AddProduct() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [caracteristicas, setCaracteristicas] = useState("");
    const [foto, setFoto] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");

    // Para redirigir a /admin después de agregar el producto exitosamente
    const navigate = useNavigate();

    // Genera un ID único para el producto
    const id_producto = uuidv4();

    // Objeto con los datos del producto
    const productObject = {
        id_producto,
        nombre,
        descripcion,
        cantidad,
        caracteristicas,
        foto_producto: foto,
        precio,
        categoria,
    };

    // Obtiene la función handleSubmit de usePost para realizar la solicitud POST
    const { handleSubmit } = usePost('http://44.194.73.147/api/v1/productos', productObject);

    // Función para agregar el producto
    const handleAddProduct = async (event) => {
        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();

        // Realizar la operación de agregar el producto
        const success = await handleSubmit();

        // Si la operación fue exitosa, redirige a /admin
        if (success) {
            navigate("/admin");
        } else {
            console.error("Error al agregar el producto.");
        }
    };

    return (
        <>
            <Header />
            <section className="container-form">
                <div className="form">
                    <div className="form-image">
                        <img src={Image} className="img-form" alt="Imagen" />
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
                        placeholder="Categoría:"
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
                        placeholder="Características:"
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
                        placeholder="URL de la foto:"
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
                        <button
                            className="bg-green-400 rounded-md p-2 shadow-md transition-colors hover:bg-green-600"
                            onClick={handleAddProduct}
                        >
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
