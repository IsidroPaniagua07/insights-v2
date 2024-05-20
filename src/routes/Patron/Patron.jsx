import React from 'react';
import { useAuth } from '../../components/AuthContext/AuthContext';

const Patron = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h1>Patron</h1>
      {isAuthenticated ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in!</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Patron;