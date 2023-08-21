/* Updated React Component */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './footerSection.css';

const FooterSection = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-menu">
            <ul>
              <li>
                <Link to="/" onClick={() => handleLinkClick('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => handleLinkClick('/about')}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => handleLinkClick('/blog')}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-disclaimer">
            <p>
              This website does not provide medical advice and <br />may earn a commission from linked purchases.
            </p>
          </div>
          <div className="footer-info">
            <p>© 2023 Lion's Mane Mushroom NZ.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
