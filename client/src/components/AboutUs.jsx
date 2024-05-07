import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us" role="article">
      <section className="about-intro">
        <h1>About HoopsMarket</h1>
        <p>HoopsMarket is the premier online destination for buying, selling, and trading basketball cards. Whether you're a seasoned collector or just starting out, you'll find our platform easy to use and full of valuable cards to complete your collection.</p>
      </section>

      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-members">
          <article className="team-member">
            <h3>Garrett Hillyer</h3>
            <p>Founder & CEO</p>
            <p>Garrett started HoopsMarket in 2024 with the vision of making basketball card trading accessible to everyone. A lifelong basketball fan and a card collector since childhood, Garrett aims to foster a community of enthusiasts and collectors.</p>
          </article>
          <article className="team-member">
            <h3>John Smith</h3>
            <p>CTO</p>
            <p>John leads our technology strategy and ensures our platform meets high standards of performance and security. His passion for sports and technology drives innovation at HoopsMarket.</p>
          </article>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>Our mission at HoopsMarket is to create a vibrant community of basketball fans and collectors where everyone can find, buy, and sell cards in a secure and supportive environment.</p>
      </section>
    </div>
  );
};

export default AboutUs;
