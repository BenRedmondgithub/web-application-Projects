import React from "react";

import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function ProtectedRoute({ children }) {
  const currentUser = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}
// This component checks if the user is authenticated before rendering the children components. If not, it redirects to the login page.