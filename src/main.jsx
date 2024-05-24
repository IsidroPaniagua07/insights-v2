import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Layout from './components/Layout/Layout';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import History from './routes/History/History';
import Patron from './routes/Patron/Patron';
import Redeem from './routes/Redeem/Redeem';
import Reports from './routes/Reports/Reports';
import GroupManager from './routes/GroupManager/GroupManager';
import Poker from './routes/Poker/Poker';
import Admin from './routes/Admin/Admin';
import { AuthProvider } from './components/AuthContext/AuthContext';
import { Provider } from 'react-redux';
import store from './components/store/store';
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
        path: "/history",
        element: <ProtectedRoute element={<History />} />,
      },
      {
        path: "/patron",
        element: <ProtectedRoute element={<Patron />} />,
      },
      {
        path: "/redeem",
        element: <ProtectedRoute element={<Redeem />} />,
      },
      {
        path: "/reports",
        element: <ProtectedRoute element={<Reports />} />,
      },
      {
        path: "/group-manager",
        element: <ProtectedRoute element={<GroupManager />} />,
      },
      {
        path: "/poker",
        element: <ProtectedRoute element={<Poker />} />,
      },
      {
        path: "/admin",
        element: <ProtectedRoute element={<Admin />} />,
      },
      {
        path: "/admin/users",
        element: <ProtectedRoute element={<Admin />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>

  </React.StrictMode>,
);
