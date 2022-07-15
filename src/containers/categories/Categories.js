import React from "react";
import { Title } from "../../components";
import "./Categories.css";
import { IconSatellite, IconPlane, IconMic, IconGear } from "../../assets";

const Categories = () => {
  return (
    <section className="category" id="category-section">
      <Title title="We offer best services" subtitle="Category" />
      <div className="category__grid">
        <div className="category__grid-card">
          <div>
            <img
              className="satellite-style"
              src={IconSatellite}
              alt="Calculated Weather"
            />
            <div className="bottom-right curve-bottom-right" />
          </div>
          <h4>Calculated Weather</h4>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className="category__grid-card">
          <div>
            <img className="plane-style" src={IconPlane} alt="Best Flights" />
            <div className="top-left curve-bottom-left" />
          </div>
          <h4>Best Flights</h4>
          <p>Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
        <div className="category__grid-card">
          <div>
            <img className="mic-style" src={IconMic} alt="Local Events" />
            <div className="top-right curve-top-right" />
          </div>
          <h4>Local Events</h4>
          <p>
            Barton vanity itself do in it. Preferred to men it engrossed
            listening.
          </p>
        </div>
        <div className="category__grid-card">
          <div>
            <img className="gear-style" src={IconGear} alt="Customization" />
            <div className="bottom-right curve-bottom-left" />
          </div>
          <h4>Customization</h4>
          <p>We deliver outsourced aviation services for military customers</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
