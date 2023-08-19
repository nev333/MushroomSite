import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./home.css";

import HeroSection from "../../heroSection/HeroSection";
import FooterSection from "../../FooterSection/FooterSection";
// import About from "../about/About";
import BlogPage from "../blogFolder/BlogPage";
// import Contact from "../contact/Contact";
import BenefitsUses from "../benefits/BenefitsUses";
// import FAQSection from "../../faq/FAQSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth"
        });
      }, 100);  // Delay in ms
    }
  }, [location]);

  return (
    <div className="homepage">
      <header className="header" id="home">
        <HeroSection />
      </header>
      <section className="about-section" id="about">
        <div className="container">
          {/* <About /> */}
          <BenefitsUses />
          {/* <FAQSection /> */}
          <BlogPage />
          {/* <Contact /> */}
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Home;
