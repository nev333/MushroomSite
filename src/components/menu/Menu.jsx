import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import logo from "../../images/Landscaper.png";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="menu-items">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="menu-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="menu-item">
          <Link to="/tools">Tools for Landscapers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
