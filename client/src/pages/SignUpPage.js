import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created:", userCredential.user);
      alert("Signup successful! Redirecting to login...");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error during signup:", error.message);
      alert(error.message); // Display error to the user
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h1>Signup Page</h1>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupPage;
