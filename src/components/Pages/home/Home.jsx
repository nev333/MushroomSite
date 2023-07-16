import React from "react";
import "./home.css";
import Menu from "../../menu/Menu";
import HeroSection from "../../heroSection/HeroSection";
import FooterSection from "../../FooterSection/FooterSection";
import About from "../about/About";
import BlogPage from "../blogFolder/BlogPage";
// import Contact from "../contact/Contact";
import BenefitsUses from "../benefits/BenefitsUses";

const Home = () => {
  return (
    <div className="homepage">
      <header className="header" id="home">
        
        <HeroSection />
      </header>
      <section className="about-section" id="about">
        <div className="container">
          <About />
          <BenefitsUses />
          <BlogPage />
          {/* <Contact /> */}
        </div>
      </section>
      
     
      <FooterSection />
    </div>
  );
};

export default Home;
