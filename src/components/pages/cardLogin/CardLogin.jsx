import { Link, useNavigate } from "react-router-dom";
import TresR from "../../../../public/img/Simbolo3r.png";
import "./cardLogin.css";
import { useState, useEffect } from "react";
import usePost from "../../../../public/hooks/usePost";
import { Alert } from "../../Alert";

const LoginCard = () => {
    // Estados locales para usuario y contraseña
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    // Hook de navegación para redirigir a diferentes rutas
    const navigate = useNavigate();

    // Objeto con los datos de inicio de sesión
    const loginUser = {
        usuario: user,
        contrasena: password,
    };

    // Hook usePost para manejar la solicitud POST de inicio de sesión
    const { handleSubmit, error, success, data } = usePost(
        "http://44.194.73.147/api/v1/auth/signin",
        loginUser
    );

    // Efecto para manejar la redirección según las credenciales
    useEffect(() => {
        if (success) {
            // Verificar credenciales específicas para rol admin
            if (user === 'admin' && password === 'didi') {
                // Redirigir a la vista del admin
                navigate('/admin');
            } else {
                // Redirigir a la vista de home
                navigate('/home');
            }
        }
    }, [success, user, password, navigate]);

    return (
        <>
            {/* Mostrar alerta de error si ocurre un error */}
            {error && (
                <Alert color1={"bg-red-500"} color2={"bg-red-800"}>
                    Error al iniciar sesión: {error}
                </Alert>
            )}
            
            {/* Formulario de inicio de sesión */}
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <img className="TresR" src={TresR} alt="Imagen de la tarjeta" />
                    
                    <div className="CardInput">
                        <input
                            type="text"
                            placeholder="Usuario:"
                            className="input-field"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña:"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    {/* Botón de inicio de sesión */}
                    <button className="bg-green-400 p-2 rounded-md hover:bg-green-600 text-white" type="submit">
                        Iniciar Sesión
                    </button>
                    
                    {/* Enlace para el registro */}
                    <p>
                        ¿Aún no tienes cuenta? Haz clic <Link to="/registro">aquí</Link>.
                    </p>
                </div>
            </form>
        </>
    );
};

export default LoginCard;
