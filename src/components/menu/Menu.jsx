import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Menu.css";
import logo from "../../images/MushroomLogo.png";

const Menu = () => {
  const [active, setActive] = useState(false);
  const handleNavClick = (target) => {
    scroll.scrollTo(target, {
      smooth: true,
      duration: 500,
    });
    setActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scale = Math.max(0.8, 1 - window.scrollY / 1000);
      document.documentElement.style.setProperty('--scale', scale);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="menu">
      <div className="logo">
        <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleNavClick("#home")}
        >
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={`menu-items ${active ? "active" : ""}`}>
        <li className="menu-item">
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
        <li className="menu-item">
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
        
        <li className="menu-item">
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
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Menu;
