import Tabla from './Pedidos'; // Asegúrate de que la ruta al componente Tabla sea correcta
import datos from './datos'; // Asegúrate de que la ruta al archivo de datos sea correcta

const Pedidos = () => {
  return (
    <div>
      <Tabla datos={datos} />
    </div>
  );
};

export default Pedidos;
