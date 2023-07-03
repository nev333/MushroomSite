import React from 'react';
import './footerSection.css';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Landscapers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-info">
            <p>© 2023 Your Landscaping Site. All rights reserved.</p>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@yourlandscapingsite.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
