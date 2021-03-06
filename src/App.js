import React from "react";
import {
  BookTrip,
  Brands,
  Categories,
  Footer,
  Hero,
  NewsLetter,
  Testimonials,
  TopSelling,
} from "./containers";

const App = () => {
  return (
    <div className="web-container">
      <Hero />
      <Categories />
      <TopSelling />
      <BookTrip />
      <Testimonials />
      <Brands />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
