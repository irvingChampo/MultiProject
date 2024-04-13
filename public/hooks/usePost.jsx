import { useState } from "react";
//* CustomHook utilizado para los post.
const usePost = (url, postObject) => {

    const [error, setError] = useState();
    const [information, setInformation] = useState(false);

    const handleSubmit = async(e) =>{
        //? Obtenemos el objeto y la url mediante props.
        e.preventDefault();

        if (Object.values(postObject).every(value => value === '')) { //! Verrficar si el objeto esta vacio
            setError(true)
            return;
        }
        console.log(postObject);
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    postObject
                )
            })
            const data = await res.json();
            setInformation(data.message)
        } catch (error) {
            setError(true)
            console.error("Error al crear: ", error );
        }
    }

  return {
    handleSubmit,
    error,
    information
  }
}

export default usePost