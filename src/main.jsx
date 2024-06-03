import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Layout from './components/Layout/Layout';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import History from './routes/History/History';
import Profile from './routes/Patron/Profile/Profile'
import Comp from './routes/Patron/Comp/Comp';
import SwipeLog from './routes/Patron/SwipeLog/SwipeLog';
import Redeem from './routes/Redeem/Redeem';
import Reports from './routes/Reports/Reports';
import GroupManager from './routes/GroupManager/GroupManager';
import Poker from './routes/Poker/Poker';
import Users from './routes/Admin/Users/Users';
import Roles from './routes/Admin/Roles/Roles';
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
        path: "/patron/profile",
        element: <ProtectedRoute element={<Profile />} />,
      },
      {
        path: "/patron/comp",
        element: <ProtectedRoute element={<Comp />} />,
      },
      {
        path: "/patron/swipelog",
        element: <ProtectedRoute element={<SwipeLog />} />,
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
        path: "/admin/users",
        element: <ProtectedRoute element={<Users />} />,
      },
      {
        path: "/admin/roles",
        element: <ProtectedRoute element={<Roles />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>

);
