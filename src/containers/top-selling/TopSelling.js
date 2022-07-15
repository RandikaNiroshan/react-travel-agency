import React from "react";
import { SellingCard, Title } from "../../components";
import "./TopSelling.css";
import { ImgRome, ImgLondon, ImgEurope, DecoSpring } from "../../assets";

const TopSelling = () => {
  return (
    <section className="selling" id="selling-section">
      <Title title="Top Destinations" subtitle="Top Selling" />
      <div>
        <div className="selling__grid">
          <SellingCard
            image={ImgRome}
            destination="Rome, Italy"
            price="5.42k"
            duration={10}
          />
          <SellingCard
            image={ImgLondon}
            destination="London, UK"
            price="4.2k"
            duration={12}
          />
          <SellingCard
            image={ImgEurope}
            destination="Full Europe"
            price="15k"
            duration={28}
          />
        </div>
        <img
          className="selling__deco"
          src={DecoSpring}
          alt="Spring decoration"
        />
      </div>
    </section>
  );
};

export default TopSelling;
