import React from "react";
import "./Header.css";
import { Logo } from "../../assets";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header__right">
        <ul>
          <li>Services</li>
          <li>Destinations</li>
          <li>Book</li>
          <li>Testimonials</li>
          <li>Login</li>
          <li className="header__right-btn">Sign up</li>
          <select className="header_right-select">
            <option value="en">EN</option>
            <option value="lk">LK</option>
          </select>
        </ul>
      </div>
    </header>
  );
};

export default Header;
