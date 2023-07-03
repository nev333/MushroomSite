import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/home/Home";
import About from "./components/Pages/about/About";
import Contact from "./components/Pages/contact/Contact";
import BlogPage from  "./components/Pages/blogFolder/BlogPage";
import LandscapeTools from "./components/Pages/landscapeTools/LandscapeTools";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/tools" element={<LandscapeTools />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
