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
    <>
      <Hero />
      <Categories />
      <TopSelling />
      <BookTrip />
      <Testimonials />
      <Brands />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
