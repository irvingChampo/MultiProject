import { useEffect, useState } from 'react'


//* Custom hook para evitar codigo duplicacado.

export const useGet = (url) => {
    const [data, setData] = useState()
    const [error, setError] = useState(false)


    useEffect(()=>{
        const api = async()=>{
            //? Pasamos la url por props, dado a que se puede reutilizar el hook en varios segmentos de codigo.
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log("Data",data);
                setData(data)
            } catch (error) {
                console.error("Error al obtener los datos: ", error);
                setError(true);
            }
        }
        api()
    },[])
  return {
     data,
     error
  }
}
