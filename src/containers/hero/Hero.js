import React from "react";
import { Header } from "../../components";
import "./Hero.css";
import { BiPlay } from "react-icons/bi";
import {
  DecoBackground,
  ImgTraveler,
  IconPlane,
  DecoRedSpray,
} from "../../assets";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__background">
        <img src={DecoBackground} alt="bg" />
      </div>
      <Header />
      <div className="hero__main">
        <div className="hero__left">
          <img src={DecoRedSpray} alt="Highlight" />
          <p>Best Destinations around the world</p>
          <h1>
            Travel, enjoy
            <br />
            and live a new
            <br />
            and full life
          </h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            <br />
            Preferred to sportsmen it engrossed listening. Park gate
            <br />
            sell they west hard for the.
          </p>
          <div className="hero__left-cta">
            <div className="hero__left-cta-btn">Find out more</div>
            <div className="hero__left-cta-play">
              <div>
                <BiPlay />
              </div>
              <p>Play Demo</p>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <img src={ImgTraveler} alt="Traveler" />
          <img src={IconPlane} alt="Plane" />
          <img src={IconPlane} alt="Plane" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
