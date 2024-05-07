import React, { useState } from 'react';
import CardListingsContainer from './MainParts/CardListingContainer';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="home-container">
      <section className="content">
        <CardListingsContainer searchTerm={searchTerm} />
      </section>
    </div>
  );
};

export default Home;
