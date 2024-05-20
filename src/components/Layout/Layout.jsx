// components/Layout/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../Navigation/Topbar/Topbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <div className="topbar">
        <Topbar />
      </div>
      <div className="sidebar-content-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Outlet /> {/* This will render the child routes */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
