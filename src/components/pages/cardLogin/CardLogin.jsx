import { Link } from "react-router-dom";
import TresR from "../../../../public/img/Simbolo3r.png";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import "./cardLogin.css";
import { useState } from "react";
import usePost from "../../../../public/hooks/usePost";
import { Alert } from "../../Alert";

const card = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const loginUser = {
    usuario: user,
    contrasena: password,
  };

  const { handleSubmit, error, informations } = usePost(
    "http://44.194.73.147/api/v1/auth/signin",
    loginUser
  );

  return (
   <>
    {error && (
      <Alert color1={"bg-red-500"} color2={"bg-red-800"}>
        Error al crear usuario
      </Alert>
    )}
    <form onSubmit={handleSubmit}>
   
   <div className="card">
     <img className="TresR" src={TresR} alt="Imagen de la tarjeta" />
     <div className="CardInput">
       <Input
         type="text"
         placeholder="Usuario:"
         size="70"
         borde="5"
         height="4vh"
         setState={setUser}
       />
       <Input
         type="password"
         placeholder="Contraseña:"
         size="70"
         borde="5"
         height="4vh"
         setState={setPassword}
       />
     </div>
     <button>asA</button>
     <p>
       Aun no tienes cuenta? Has Clic <Link to={"/registro"}>Aqui!</Link>{" "}
     </p>
   </div>
 </form>
   </>
  );
};

export default card;
