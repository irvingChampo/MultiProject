import './button.css';

const button = ({ children, size = "20", size2 = "20", color, backgroundColor}) => (
  <button 
    className='button' 
    style={{ width: `${size}%`, height: `${size2}%`, color, backgroundColor }} 
  >
    {children}
  </button>
);

export default button;
