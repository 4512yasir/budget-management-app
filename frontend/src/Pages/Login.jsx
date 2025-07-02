import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Services/authService';
import { useAuth } from '../Auth/AuthContext';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(formData);
    if (response.access_token) {
      login(response.access_token);
      navigate('/dashboard');
    } else {
      alert(response.message || 'Login failed');
    }
  };

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
