import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Backend signup API will be connected here via authApi.signup(form)
    navigate('/login');
  };

  return (
    <main className="container">
      <h2>Signup</h2>
      <form className="card" onSubmit={handleSubmit}>
        <label>Name
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </label>
        <label>Email
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </label>
        <label>Password
          <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        </label>
        <label>Signup Role
          <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button type="submit">Create Account</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </main>
  );
}

export default SignupPage;
