import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';  

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const { data } = await axios.post(
        'https://final-server-git.onrender.com/api/users',
        formData,
        config
      );
      localStorage.setItem('token', data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      
      console.log('Login successful', data);
      navigate('/Home'); 
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      setError('Invalid email or password.'); 
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Login</h2>
      {error && <div className="error-message">{error}</div>} 
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />

        <label className="form-label" htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-input" required />

        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
