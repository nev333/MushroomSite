import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Pages/home/Home";
import About from "./components/Pages/about/About";
import Contact from "./components/Pages/contact/Contact";
import BlogPage from "./components/Pages/blogFolder/BlogPage";
import BlogPostPage from "./components/Pages/blogFolder/BlogPostPage";
import Menu from "./components/menu/Menu";
import './App.css';
import FooterSection from "./components/FooterSection/FooterSection";

import ReactGA from 'react-ga';

// Initialize Google Analytics
ReactGA.initialize('G-0NE2GG0YEZ');

// This function records a pageview each time the route changes.
function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// Call logPageView on every route change
logPageView();


function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const [isMenuShrunk, setIsMenuShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isMenuShrunk) {
        setIsMenuShrunk(true);
      } else if (window.scrollY === 0 && isMenuShrunk) {
        setIsMenuShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuShrunk]);

  return (
    <Router>
      <div className={`App ${isMenuShrunk ? 'shrink' : ''}`}>
        <Menu />
        <ScrollToTop />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
        </div>
        <FooterSection  />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
      </div>
    </Router>
  );
}

export default App;
