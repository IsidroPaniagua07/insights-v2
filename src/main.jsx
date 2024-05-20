import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Patron from './routes/Patron/Patron';
import Layout from './components/Layout/Layout';
import { AuthProvider } from './components/AuthContext/AuthContext';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <Layout />, // This will wrap around the following routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/patron",
        element: <ProtectedRoute element={<Patron />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
