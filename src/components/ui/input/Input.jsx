import './input.css'

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, type = "text", size = "20", borde = "0", height = "auto", color, bordes = " solid 0px" }) => (
  <input 
    type={type} 
    placeholder={placeholder} 
    style={{ width: `${size}%`, borderRadius: `${borde}px` , height, backgroundColor: color, border: bordes }} 
  />
);

export default Input;
