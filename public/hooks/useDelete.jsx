import React, { useState } from 'react';

export const useDelete = (url, token) => {
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Incluir el token en el encabezado
                },
            });
            const data = await res.json();
            console.log("Data after delete:", data);
            window.location.reload();
        } catch (error) {
            console.error("Error deleting data: ", error);
            setError(true);
        }
    }

    return {
        handleSubmit,
        error
    }
}
