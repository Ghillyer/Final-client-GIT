import React from 'react';
import './Listing.css';
import CardListingsContainer from './MainParts/CardListingContainer.jsx';

const Listing = () => {
  return (
    <div className="listing-container">
      <h1>Card Listings</h1>
      <CardListingsContainer />
    </div>
  );
};

export default Listing;
