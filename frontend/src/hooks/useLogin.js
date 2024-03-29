import { toast } from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

// this is an useLogin method get the data from the server and compare it with the current user data.


const useLogin = () => {

    const [loading, setLoading]= useState(false);   
    const { setAuthUser } = useAuthContext();

    const login = async (userName, password) => {
        const success = handleInputErrors(userName, password);
		if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userName, password }),
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
            setLoading(false);
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