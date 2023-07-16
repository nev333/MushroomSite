import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './footerSection.css';

const FooterSection = () => {
  const handleNavClick = (target) => {
    scroll.scrollTo(target, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-menu">
            <ul>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleNavClick("#home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleNavClick("#about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleNavClick("#blog")}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-disclaimer">
            <p>This website does not provide medical advice and</p> 
            <p>may earn a commission from linked purchases.</p>
          </div>
          <div className="footer-info">
            <p>© 2023 Lions Mane Mushroom NZ.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
