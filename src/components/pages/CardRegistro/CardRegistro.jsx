import { useState } from "react";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import "./cardRegistro.css";
import TresR from "../../../../public/img/Simbolo3r.png";
import { Link } from "react-router-dom";
import usePost from "../../../../public/hooks/usePost";
import { Alert } from "../../Alert";
import { v4 as uuidv4 } from 'uuid';

function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [telefono, setTelefono] = useState("");
  const [usuario, setUsuario] = useState("");



  const id_usuario = uuidv4();

  const userObject = {
    id_usuario,
    nombre,
    apellido,
    correo,
    contrasena,
    telefono,
    usuario,
    foto_perfil: "URL de ejemplo"
  }

  const { handleSubmit, error, information } = usePost('http://44.194.73.147/api/v1/auth/signup', userObject)

  return (
    <>
      {error && (
        <Alert color1={"bg-red-500"} color2={"bg-red-800"}>
          Error al crear usuario
        </Alert>
      )}
      

      <div className="card-Registro">
        <div className="image-Registro">
          <img
            className="TresR-Registro"
            src={TresR}
            alt="Imagen de la tarjeta"
          />
        </div>
        <div className="CardInput-Registro">
          <form className="form-registro" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nombre:"
              size="40"
              height=""
              borde="5"
              value={nombre}
              setState={setNombre}
            />
            <Input
              type="text"
              placeholder="Apellido(s)"
              size="40"
              height=""
              borde="5"
              value={apellido}
              setState={ setApellido}
            />
            <Input
              type="email"
              placeholder="Correo:"
              size="40"
              height=""
              borde="5"
              value={correo}
              setState={setCorreo}
            />
            <Input
              type="password"
              placeholder="Contraseña:"
              size="40"
              height=""
              borde="5"
              value={contrasena}
              setState={ setContrasena}
            />
            <Input
              type="text"
              placeholder="Teléfono:"
              size="40"
              height=""
              borde="5"
              value={telefono}
              setState={ setTelefono}
            />
            <Input
              type="text"
              placeholder="Usuario:"
              size="40"
              height=""
              borde="5"
              value={usuario}
              setState={ setUsuario}
            />
            <Button type="submit" size="40" size2="20">
              Registrarme
            </Button>
          </form>
        </div>
        <Link to={"/home"} className="Link-registro">
          {/* Puedes mantener el botón de registro, pero ahora está manejado por el formulario */}
        </Link>
      </div>
    </>
  );
}

export default Registro;
