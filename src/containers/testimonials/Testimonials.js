import React from "react";
import { Title } from "../../components";
import "./Testimonials.css";
import { ImgUser } from "../../assets";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__left">
        <Title
          title="What people say about Us."
          subtitle="Testimonials"
          center={false}
        />
        <div>
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="testimonials__right">
        <div>
          <div className="testimonials-card active-card">
            <p>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <div>
              <p>Mike taylor</p>
              <p>Lahore, Pakistan</p>
            </div>
          </div>
          <div className="testimonials-card inactive-card">
            <p>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <div>
              <p>Chris Thomas</p>
              <p>CEO of Red Button</p>
            </div>
          </div>
          <div className="testimonials-card-user">
            <img src={ImgUser} alt="Mike taylor" />
          </div>
        </div>
        <div>
          <MdKeyboardArrowUp className="inactive-icon" />
          <MdKeyboardArrowDown className="active-icon" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
