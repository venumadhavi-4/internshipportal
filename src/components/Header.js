import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <h1>Remote Internship Platform</h1>
      <nav>
        {!auth.token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : auth.role === 'student' ? (
          <>
            <Link to="/student/dashboard">Dashboard</Link>
            <Link to="/student/profile">Profile</Link>
            <Link to="/student/internships">Internships</Link>
            <Link to="/student/applied">Applied</Link>
            <Link to="/student/tasks">Tasks</Link>
            <button type="button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/admin/internships">Manage Internships</Link>
            <Link to="/admin/applicants">Applicants</Link>
            <Link to="/admin/tasks">Tasks</Link>
            <button type="button" onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
