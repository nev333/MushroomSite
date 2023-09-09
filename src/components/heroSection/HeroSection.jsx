import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './HeroSection.css';
import logo from "../../images/newLogo.png";

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
      <div className='logo-head'>
        <img src={logo} alt='logo Head'/>
      </div>
      <div className='text-content'>
        <h1>Lion's Mane Mushroom NZ</h1>
        <p>Unlocking the Power of Lion's Mane: Exploring the Benefits of this Remarkable Mushroom</p>
        <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleNavClick("#about")}
        >
          <button className="button-one">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

