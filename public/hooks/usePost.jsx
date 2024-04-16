import { useState } from "react";

const usePost = (url, postObject) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(null);

  // Función para manejar la solicitud POST
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar que todos los campos de postObject estén llenos
    if (Object.values(postObject).some((value) => value === "")) {
      setError("Todos los campos deben estar llenos");
      setSuccess(false);
      return false;
    }

    try {
      // Obtener el token de localStorage (si existe)
      const token = localStorage.getItem("token");

      // Configurar las opciones de la solicitud POST
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Incluir token en el header si está presente
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(postObject),
      };

      // Realizar la solicitud POST
      const response = await fetch(url, requestOptions);
      const responseData = await response.json();

      // Verificar si la respuesta es exitosa
      if (!response.ok || responseData.error) {
        throw new Error(responseData.error || "Error en la solicitud POST");
      }

      // Solicitud exitosa, actualizar estados
      setSuccess(true);
      setData(responseData);

      if(responseData.token){
        localStorage.setItem("token", responseData.token);
      }
      if(responseData.id_usuario){
        localStorage.setItem("id_usuario", responseData.id_usuario);
      }
      if(responseData.roles){
        localStorage.setItem('rol',responseData.roles)
      }

      return true; // Indicar éxito
    } catch (err) {
      // Manejo de errores
      setError(err.message);
      setSuccess(false);
      console.error("Error en la solicitud POST:", err);
      return false; // Indicar fallo
    }
  };

  // Retornar la función handleSubmit, error, éxito, y datos
  return {
    handleSubmit,
    error,
    success,
    data,
  };
};

export default usePost;
