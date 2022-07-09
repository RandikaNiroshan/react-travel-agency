import React from "react";
import "./SellingCard.css";
import { TiLocationArrow } from "react-icons/ti";

const SellingCard = ({ image, destination, price, duration }) => {
  return (
    <div className="selling-card">
      <img src={image} alt={destination} />
      <div>
        <div className="selling-card__destination">
          <p>{destination}</p>
          <p>{`$${price}`}</p>
        </div>
        <div className="selling-card__duration">
          <TiLocationArrow />
          <p>{`${duration} Days Trip`}</p>
        </div>
      </div>
    </div>
  );
};

export default SellingCard;
