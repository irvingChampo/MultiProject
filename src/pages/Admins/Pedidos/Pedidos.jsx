import Header from '../../../components/pages/header/Header';
import './pedidos.css'

// eslint-disable-next-line react/prop-types
const Tabla = ({ datos }) => {
  return (
    <section className='container-pedidos'>
    <Header/>
    <table>
      <thead>
        <tr>
          <th>Número</th>
          <th>Nombre de Usuario</th>
          <th>Información de Productos</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{fila.nombreUsuario}</td>
            <td>{fila.infoProductos}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  );
};

export default Tabla;
