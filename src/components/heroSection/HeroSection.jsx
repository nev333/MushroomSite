import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Landscaper NZ</h1>
        <p>A place for landscapers to showcase their best work, and talk about unique projects</p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default HeroSection;
