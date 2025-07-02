// src/components/Sidebar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Authcontext';
import '../css/components.css'

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">FinTrack Pro</h2>
      <ul className="sidebar-menu">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/budgets">Budgets</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
