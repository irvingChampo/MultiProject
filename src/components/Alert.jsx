import React from 'react';

export const Alert = ({ color1, color2, children}) => {
  return (
    <div className={`${color1} ${color2} text-white p-4 fixed top-0 left-0 right-0 z-50`} role="alert">
      <p className="font-bold ">¡Atención!</p>
      <p className=''>{children}</p>
    </div>
  );
};
