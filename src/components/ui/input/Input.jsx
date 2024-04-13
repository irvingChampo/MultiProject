import './input.css'

//? Agregación de la funcionalidad onChange en el input.

const Input = ({ placeholder, type = "text", size = "20", borde = "0", height = "auto", color, bordes = " solid 0px", setState }) => (
  <input 
    type={type} 
    placeholder={placeholder} 
    style={{ width: `${size}%`, borderRadius: `${borde}px` , height, backgroundColor: color, border: bordes }}
    onChange={(e) => setState(e.target.value)}
  />
);

export default Input;
