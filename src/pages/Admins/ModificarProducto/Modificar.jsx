import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Image from "../../../../public/img/image.png";
import Header from "../../../components/pages/HeaderAdmin/HeaderAdmin";
import Footer from "../../../components/pages/footer/Footer";
import Input from "../../../components/ui/input/Input";
import "./modificar.css";

function ModifyProduct() {
    const { id } = useParams(); // Obtenemos el id del producto de los parámetros de la URL
    const navigate = useNavigate(); // Para redirigir a la vista /admin

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [caracteristicas, setCaracteristicas] = useState("");
    const [foto, setFoto] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");

    // Función para cargar los datos del producto cuando el componente se monta
    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`http://44.194.73.147/api/v1/productos/${id}`);
                const data = await response.json();

                if (response.ok) {
                    setNombre(data.nombre);
                    setDescripcion(data.descripcion);
                    setCantidad(data.cantidad);
                    setCaracteristicas(data.caracteristicas);
                    setFoto(data.foto_producto);
                    setPrecio(data.precio);
                    setCategoria(data.categoria);
                } else {
                    console.error("Error al cargar el producto:", data);
                }
            } catch (error) {
                console.error("Error al cargar el producto:", error);
            }
        }

        fetchProduct();
    }, [id]);

    // Función para manejar la actualización del producto
    const handleUpdateProduct = async (event) => {
        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();

        // Objeto con los datos del producto a actualizar
        const productObject = {
            id_producto: id,
            nombre,
            descripcion,
            cantidad,
            caracteristicas,
            foto_producto: foto,
            precio,
            categoria,
        };

        try {
            // Realiza la solicitud PUT a la API para actualizar el producto
            const response = await fetch(`http://44.194.73.147/api/v1/productos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(productObject),
            });

            // Obtén los datos de la respuesta
            const data = await response.json();

            // Si la operación fue exitosa
            if (response.ok) {
                // Redirige a la vista /admin
                navigate("/admin");
            } else {
                // Muestra errores si los hay
                console.error("Error al actualizar el producto:", data);
            }
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
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
                        value={nombre}
                    />
                    <Input
                        type="text"
                        placeholder="Categoría:"
                        size="70"
                        borde="5"
                        height="5vh"
                        setState={setCategoria}
                        value={categoria}
                    />
                    <Input
                        type="number"
                        placeholder="Precio:"
                        size="70"
                        borde="5"
                        height="5vh"
                        setState={setPrecio}
                        value={precio}
                    />
                    <Input
                        type="text"
                        placeholder="Características:"
                        size="70"
                        borde="5"
                        height="5vh"
                        setState={setCaracteristicas}
                        value={caracteristicas}
                    />
                    <Input
                        type="text"
                        placeholder="Descripción:"
                        size="70"
                        borde="5"
                        height="5vh"
                        setState={setDescripcion}
                        value={descripcion}
                    />
                    <Input
                        type="number"
                        placeholder="En existencia:"
                        size="70"
                        borde="5"
                        height="5vh"
                        setState={setCantidad}
                        value={cantidad}
                    />
                    <Input
                        type="text"
                        placeholder="URL de la foto:"
                        size="70"
                        borde="5"
                        height="5vh"
                        setState={setFoto}
                        value={foto}
                    />
                    <div className="container-button">
                        <Link className="Link-add-admin" to={"/admin"}>
                            <button className="bg-red-500 rounded-md p-2 shadow-md transition-colors hover:bg-red-800">
                                Cancelar
                            </button>
                        </Link>
                        <button
                            className="bg-green-400 rounded-md p-2 shadow-md transition-colors hover:bg-green-600"
                            onClick={handleUpdateProduct}
                        >
                            Modificar
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ModifyProduct;
