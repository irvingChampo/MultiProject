import { useState } from "react";

const usePost = (url, postObject) => {
  const [error, setError] = useState();
  const [information, setInformation] = useState(false);
  const [avalible, setAvalible] = useState(true);

  const handleSubmit = async (e) => {
    console.log(postObject);
    e.preventDefault();

    if (Object.values(postObject).every((value) => value === "")) {
      setError(true);
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postObject),
      };

      // Agregar token al header si existe en localStorage
      if (token) {
        requestOptions.headers["Authorization"] = `Bearer ${token}`;
      }

      const res = await fetch(url, requestOptions);
      const data = await res.json();
      console.log(data);
      

      if (data.error) {
        setAvalible(true);
        return;
      }

      setInformation(data.message);
      setAvalible(false);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.id_usuario) {
        localStorage.setItem("id_usuario", data.id_usuario);
      }
      if(data.roles){
        localStorage.setItem('rol',data.roles)
      }
    } catch (error) {
      setError(true);
      setAvalible(true);
      console.error("Error al crear: ", error);
    }
  };

  return {
    handleSubmit,
    error,
    information,
    avalible,
  };
};

export default usePost;
