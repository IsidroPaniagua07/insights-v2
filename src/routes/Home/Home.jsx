import React from 'react';
import { useAuth } from '../../components/AuthContext/AuthContext';

const Home = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className='bg-[#3D3D3D] h-full'>
      <h1>Home</h1>
    </div>
  );
};

export default Home;