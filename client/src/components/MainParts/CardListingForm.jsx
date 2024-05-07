import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CardListingForm.css';

const CardListingForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    playerName: '',
    description: '',
    price: '',
    condition: '',
    isGraded: 'No',
    image: ''
  });
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to list a card. Please create an account or log in.');
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, type, checked, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Your session has expired. Please log in again.');
      navigate('/login');
      return;
    }
  
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });
  
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      const response = await axios.post('https://final-server-git.onrender.com/api/cards', data, config);
  
      console.log(response.data); 
      alert('Card listed successfully!');
      navigate('/Listings'); 
    } catch (error) {
      console.error(error.response ? error.response.data : error.message); 
      if (error.response && error.response.status === 401) {
        alert('Session expired, please login again.');
        navigate('/login');
      }
    }
  };
  

  return (
    <div className="card-listing-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="playerName">Player Name:</label>
        <input
          type="text"
          id="playerName"
          name="playerName"
          value={formData.playerName}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price ($):</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="condition">Condition:</label>
        <select
          id="condition"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          required>
          <option value="">Select Condition</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>

        <label htmlFor="isGraded">Graded:</label>
        <div>
          <label>
            <input
              type="radio"
              name="isGraded"
              value="Yes"
              checked={formData.isGraded === 'Yes'}
              onChange={handleChange}
            /> Yes
          </label>
          <label>
            <input
              type="radio"
              name="isGraded"
              value="No"
              checked={formData.isGraded === 'No'}
              onChange={handleChange}
            /> No
          </label>
        </div>

        <label htmlFor="image">Image (upload):</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
        />

        <button type="submit">List Card</button>
      </form>
    </div>
  );
};

export default CardListingForm;
