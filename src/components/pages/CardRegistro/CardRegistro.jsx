import { useState } from 'react';
import Button from '../../ui/button/Button';
import Input from '../../ui/input/Input';
import './cardRegistro.css';
import TresR from '../../../../public/img/Simbolo3r.png';
import { Link } from 'react-router-dom';

function Registro() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [telefono, setTelefono] = useState('');
    const [usuario, setUsuario] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre,
                    apellido,
                    correo,
                    contrasena,
                    telefono,
                    usuario,
                }),
            });

            const data = await response.json();
            alert(data.message); // Muestra el mensaje de éxito o error
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            alert('Error al registrar usuario. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    return ( 
        <div className="card-Registro">
          <div className='image-Registro'>
            <img className='TresR-Registro' src={TresR} alt="Imagen de la tarjeta" />
          </div>
          <div className='CardInput-Registro'>
            <form className='form-registro' onSubmit={handleSubmit}>
                <Input type="text" placeholder="Nombre:" size="40" height='' borde='5' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <Input type="text" placeholder="Apellido(s)" size="40" height='' borde='5' value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <Input type="email" placeholder="Correo:" size="40" height='' borde='5' value={correo} onChange={(e) => setCorreo(e.target.value)} />
                <Input type="password" placeholder="Contraseña:" size="40" height='' borde='5' value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                <Input type="text" placeholder="Teléfono:" size="40" height='' borde='5' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <Input type="text" placeholder="Usuario:" size="40" height='' borde='5' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                <Button type="submit" size="40" size2="20">Registrarme</Button>
            </form>
          </div>
          <Link to={'/home'} className='Link-registro'>
            {/* Puedes mantener el botón de registro, pero ahora está manejado por el formulario */}
          </Link>
      </div>
     );
}

export default Registro;
