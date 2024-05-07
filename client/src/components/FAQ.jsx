
import React from 'react';
import './InfoPages.css'; 

const FAQ = () => {
  return (
    <div className="info-page">
      <h1>Frequently Asked Questions</h1>
      <section>
        <h2>How do I list a card?</h2>
        <p>To list a card, navigate to the 'List a Card' page and fill out the form with the card details and submit.</p>
      </section>
      <section>
        <h2>How can I purchase a card?</h2>
        <p>You can browse available cards under the 'Listings' page. Click on a card to view its details and purchase options.</p>
      </section>
      <section>
        <h2>What payment methods are accepted?</h2>
        <p>We accept various payment methods, including major credit cards and secure online payment platforms.</p>
      </section>
    </div>
  );
};

export default FAQ;
