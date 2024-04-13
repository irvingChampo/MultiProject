import escoba from "../../../../public/img/escobas.jpg";
import Card from "../../ui/card/Card";
import "./cardMenu.css";
import { useGet } from "../../../../public/hooks/useGet";

const CardMenu = ({ text, data }) => {
  console.log(data);

  //* Verificar si data es undefined
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="spinner border-t-4 border-b-4 border-gray-200 rounded-full w-12 h-12 animate-spin mx-auto mb-4"></div>
        <p>Cargando...</p>
      </div>
    </div>
    ); //? Otra UI para indicar que se están cargando los datos
  }

  return (
    <div className="CardMenu">
      <nav className="title">
        <h1>{text}</h1>
      </nav>
      <div className="container-cards-Home">
        {data.productos.map((product) => (
          <Card
            key={product.id} //* Asegúrate de tener una clave única para cada elemento en el array mapeado
            textName={product.nombr}
            descripcion={product.descripcion}
            size="15"
            size2="77"
            image={product.foto_producto}
          />
        ))}
      </div>
    </div>
  );
};
export default CardMenu;
