import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
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
      await axios.post('http://localhost:5000/api/users/signup', formData, config);
      console.log('Signup successful');
      navigate('/login'); 
    } catch (error) {
      if (error.response) {
        console.error('Signup error:', error.response.data);
        setError(error.response.data.message); 
      } else {
        console.error('Signup error:', error.message);
        setError('An error occurred. Please try again.'); 
      }
    }
  };
  

  return (
    <div className="form-container">
      <h2 className="form-heading">Sign Up</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-input" required />
    
        <label className="form-label" htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
    
        <label className="form-label" htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-input" required />
    
        <button type="submit" className="form-button">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
