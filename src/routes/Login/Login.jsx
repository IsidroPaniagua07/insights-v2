import React from 'react';
import { useAuth } from '../../components/AuthContext/AuthContext';

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const handleLogin = () => {
    const userData = { name: "John Doe", email: "john.doe@example.com" };
    login(userData);
  };

  return (
    <div>
      <h1>Login</h1>
      {isAuthenticated ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in!</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;