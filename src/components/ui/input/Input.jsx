import './input.css'

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, type = "text", size = "20", borde = "0", height = "auto" }) => (
  <input 
    type={type} 
    placeholder={placeholder} 
    style={{ width: `${size}%`, borderRadius: `${borde}px` , height }} 
  />
);

export default Input;
