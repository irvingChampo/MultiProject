import { useState } from "react";

export const useUpdate = () => {
    const [error, setError] = useState(false);
    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
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
        }
    }
  return {
    handleUpdate,
    error
  }
}
