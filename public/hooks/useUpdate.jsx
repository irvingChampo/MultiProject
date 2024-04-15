import { useState } from "react";

export const useUpdate = (url, updateObject) => {
    const [error, setError] = useState(false);
    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
            console.log(updateObject);
            const res = await fetch(url, updateObject, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify(updateObject),
            })
            const data = await res.json();
            console.log(data);

        } catch (error) {
            console.error("Error updating data: ", error);
            setError(true)
        }
    }
  return {
    handleUpdate,
    error
  }
}
