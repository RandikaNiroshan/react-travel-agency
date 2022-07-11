import React from "react";
import "./Brands.css";
import {
  ImgBrand1,
  ImgBrand2,
  ImgBrand3,
  ImgBrand4,
  ImgBrand5,
} from "../../assets";

const Brands = () => {
  return (
    <section className="brands">
      <div className="brands__list">
        <div>
          <img src={ImgBrand1} alt="Brand 1" />
        </div>
        <div>
          <img src={ImgBrand2} alt="Brand 2" />
        </div>
        <div>
          <img src={ImgBrand3} alt="Brand 3" />
        </div>
        <div>
          <img src={ImgBrand4} alt="Brand 4" />
        </div>
        <div>
          <img src={ImgBrand5} alt="Brand 5" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
