import React from "react";
import {signout } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../hook/useAuth";

export default function Dashboard() {
    const currentUser = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out!");
    } catch (error) {
      alert("Error signing out: " + error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
      {currentUser && (
        <p>Logged in as: <strong>{currentUser.email}</strong></p>
      )}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}