import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return element;
  // return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;