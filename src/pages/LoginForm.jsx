// LoginForm.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const LoginForm = () => {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const firebaseAuth = getAuth();
  const provider = new GoogleAuthProvider();

  const adminEmail = "randinurrizki85@gmail.com";

  const loginWithGoogle = async () => {
    try {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      // Set the user in the global state
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));

      // Redirect to Dashboard if admin
      if (providerData[0].email === adminEmail) {
        navigate("/dashboard");
      } else {
        alert("You are not authorized to access the dashboard.");
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login to Admin Dashboard</h2>
      <button
        onClick={loginWithGoogle}
        className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition duration-200"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginForm;
