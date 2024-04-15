import { Link } from 'react-router-dom';
import Header from '../../../components/pages/HeaderAdmin/HeaderAdmin';
import { useEffect, useState } from 'react';

const Tabla = ({ datos }) => {
  const [data, setData] = useState()
useEffect(()=>{
 
  const api = async() =>{
    try {
      const res = await fetch('http://44.194.73.147/api/v1/usuarios/usuarios', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      });
      const data = await res.json()
      console.log(data);
      setData(data)
    } catch (error) {
      console.error('error al traer la informacion', error);
    }
  }

  api()
},[])

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
    </div>
  );
};

  return (
    <>
    <Header/>
       <section className='container mx-auto p-4 mt-10'>
      
      <table className='w-full'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='py-2 px-4'>Número</th>
            <th className='py-2 px-4'>Nombre de Usuario</th>
            <th className='py-2 px-4'>Información de Productos</th>
          </tr>
        </thead>
        <tbody>
          {
            data ? (
              data.usuarios.map((fila, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className='py-2 px-4'>{index + 1}</td>
                  <td className='py-2 px-4'>{fila.nombre} <Link to={''} className='text-blue-500 ml-2'>Chat</Link></td>
                  <td className='py-2 px-4'>{fila.carrito.length}</td>
                </tr>
              )) 
            ): (
              <LoadingSpinner/>
            )
          }
        </tbody>
      </table>
    </section>
    </>
 
  );
};

export default Tabla;
