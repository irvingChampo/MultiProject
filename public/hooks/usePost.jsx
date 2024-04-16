import { useState } from "react";

const usePost = (url, postObject) => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Función para realizar la solicitud POST
    const handleSubmit = async (event) => {
        // Asegurarse de que el evento está presente y prevenir su comportamiento predeterminado
        if (event && typeof event.preventDefault === "function") {
            event.preventDefault();
        }

        // Verifica que los campos en postObject no estén vacíos
        if (Object.values(postObject).some((value) => value === "")) {
            setError("Todos los campos deben estar llenos");
            setSuccess(false);
            return false;
        }

        try {
            const token = localStorage.getItem("token");

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token && { "Authorization": `Bearer ${token}` }),
                },
                body: JSON.stringify(postObject),
            };

            const response = await fetch(url, requestOptions);
            const data = await response.json();

            // Manejar errores de la respuesta
            if (!response.ok || data.error) {
                throw new Error(data.error || "Error al agregar el producto.");
            }

            // La operación fue exitosa
            setSuccess(true);
            return true;
        } catch (error) {
            // Manejar errores de la solicitud
            setError(error.message);
            setSuccess(false);
            console.error("Error en la solicitud POST: ", error);
            return false;
        }
    };

    return {
        handleSubmit,
        error,
        success,
    };
};

export default usePost;
