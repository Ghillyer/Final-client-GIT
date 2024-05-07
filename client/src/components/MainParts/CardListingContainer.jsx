import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListingBox from './ListingBox';

const CardListingsContainer = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cards/')
      .then(response => {
        setCards(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
        setError('Failed to load cards');
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading cards: {error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search for cards..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      {cards.filter(card => card.title.toLowerCase().includes(searchTerm.toLowerCase())).map(card => (
        <ListingBox
          key={card._id}
          id={card._id}
          title={card.title}
          playerName={card.playerName}
          description={card.description}
          price={card.price}
          condition={card.condition}
          isGraded={card.isGraded}
          imageSrc={card.image}
          shipping="Free Shipping"
        />
      ))}
    </div>
  );
};

export default CardListingsContainer;
