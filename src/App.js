import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/home/Home";
import About from "./components/Pages/about/About";
import Contact from "./components/Pages/contact/Contact";
import BlogPage from "./components/Pages/blogFolder/BlogPage";
import BlogPostPage from "./components/Pages/blogFolder/blogPages/BlogPostPage"; // New Component
import Menu from "./components/menu/Menu";
import './App.css';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} /> {/* New Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
