import React from 'react';
import './ListingBox.css'; 

const ListingBox = ({
  id, 
  title,
  playerName,
  description,
  price,
  condition,
  isGraded,
  imageSrc, 
  shipping
}) => {


  return (
    <div className="listing-box">
      <div className="listing-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="listing-info">
        <h3 className="listing-title">{title}</h3>
        <h4 className="listing-player-name">Player: {playerName}</h4>
        <p className="listing-description">{description}</p>
        <p className="listing-condition">Condition: {condition}</p>
        <p className="listing-graded">{isGraded ? "Graded: Yes" : "Graded: No"}</p>
        <div className="listing-price-shipping">
          <span className="listing-price">Price: ${price}</span>
        </div>
        <div className="listing-actions">
          <button className="offer-button">Make Offer</button>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ListingBox;
