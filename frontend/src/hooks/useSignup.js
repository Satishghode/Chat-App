import { useState } from "react";
import toast from "react-hot-toast";
// import { useAuthContext } from "../context/AuthContext";

// use this method to register the user with fullName, userName, password, confirmPassword, gender
const useSignup = () => {
	const [loading, setLoading] = useState(false);
	// const { setAuthUser } = useAuthContext();
	// this method is used to verify user data and send it to the server 
	const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
		const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		// fetch the user information to the server and handle the user login success.
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, userName, password, confirmPassword, gender }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

// this method handlesInputeErros method get the data from the client and sends it to the server and returns the data resonance to the clent.

function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
	if (!fullName || !userName || !password || !confirmPassword || !gender) {
		toast.error("All fields are required ");
		return false;
	}
	//  it checks password and confirm password is matche.
	if (password !== confirmPassword) {
		toast.error("Passwords do not match"); // if password is do not match then return error message 
		return false;
	}
	// check the password lenfth field
	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
