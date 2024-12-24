import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('userdetails'); // Check if user is logged in
  
  if (!isAuthenticated) {
    // If not logged in, redirect to login page
    return <Navigate to="/" />;
  }

  return element; // If logged in, render the requested page
};

export default ProtectedRoute;
