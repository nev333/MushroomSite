import React from "react";
import "./home.css";
import Menu from "../../menu/Menu";
import HeroSection from "../../heroSection/HeroSection";
import { landscapers } from "../../Data/LandscapersData";
import FooterSection from "../../FooterSection/FooterSection";
import SearchBar from "../../searchBar/SearchBar";

const Home = () => {
  // Dummy data for client reviews
  const clientReviews = [
    {
      id: 1,
      name: "John Doe",
      review: "Great landscaping services!",
      rating: 5,
      website: "https://example.com",
    },
    // Add more client reviews here...
  ];

  return (
    <div className="homepage">
      <header className="header">
        <Menu />
        <HeroSection />
        <SearchBar landscapers={landscapers} />
      </header>
      <section className="reviews">
        <h2>Client Reviews</h2>
        {clientReviews.map((review) => (
          <div key={review.id} className="review">
            <p>{review.review}</p>
            <div className="rating">
              {Array(review.rating).fill().map((_, index) => (
                <span className="star" key={index}>
                  &#9733;
                </span>
              ))}
            </div>
            <a href={review.website}>Visit Website</a>
          </div>
        ))}
      </section>

      <FooterSection />
    </div>
  );
};

export default Home;
