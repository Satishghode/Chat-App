import { toast } from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

// this is an useLogin method get the data from the server and compare it with the current user data.


const useLogin = () => {

    const [loading, setloading]= useState();   
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
		if (!success) return;
        setloading(true);
        try {
            const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message); 
        }finally{
            setloading(false);
        }

    }
    return { loading, login };  

}

export default useLogin;  

// handle the invalide inpute 

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}