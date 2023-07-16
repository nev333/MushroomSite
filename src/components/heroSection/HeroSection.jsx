import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './HeroSection.css';

const HeroSection = () => {

  const handleNavClick = (target) => {
    scroll.scrollTo(target, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <div className="hero-section">
      <div className="background-image"></div>
      <div className="hero-content">
        <h1>Lions Mane Mushroom NZ</h1>
        <p>Unlocking the Power of Lion's Mane: Exploring the Benefits of this Remarkable Mushroom</p>
        <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleNavClick("#about")}
          >
          <button className="hero-button">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
