import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";
import logo from "../../images/LionsManeLogoNew.png";

const Menu = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setActive(false);
    navigate(path);
  }

  return (
    <nav className="menu">
      <div className="logo">
        <Link to="/" onClick={() => handleLinkClick('/')}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={`menu-items ${active ? "active" : ""}`}>
        <li className="menu-item">
          <Link to="/" onClick={() => handleLinkClick('/')}>
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/about" onClick={() => handleLinkClick('/about')}>
            About
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/blog" onClick={() => handleLinkClick('/blog')}>
            Blog
          </Link>
        </li>
      </div>
      <div className="hamburger-menu" onClick={() => setActive(!active)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Menu;
