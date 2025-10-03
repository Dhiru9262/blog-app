// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // redirect to login if no token
    return <Navigate to="/login" replace />;
  }

  // allow children (Dashboard, Profile, etc.)
  return children;
};

export default ProtectedRoute;
