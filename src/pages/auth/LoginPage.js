import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '', role: 'student' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Backend login API will be connected here via authApi.login(form)
    login({ role: form.role, email: form.email });
    navigate(form.role === 'student' ? '/student/dashboard' : '/admin/dashboard');
  };

  return (
    <main className="container">
      <h2>Login</h2>
      <form className="card" onSubmit={handleSubmit}>
        <label>Email
          <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </label>
        <label>Password
          <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        </label>
        <label>Role
          <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button type="submit">Login</button>
      </form>
      <p>Don&apos;t have an account? <Link to="/signup">Signup</Link></p>
    </main>
  );
}

export default LoginPage;
