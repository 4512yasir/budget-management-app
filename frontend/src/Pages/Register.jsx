import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Services/authService';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(formData);
    if (response.message === 'User registered successfully') {
      navigate('/login');
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
