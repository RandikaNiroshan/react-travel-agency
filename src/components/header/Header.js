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
          <li className="nav-menu">Services</li>
          <li className="nav-menu">Destinations</li>
          <li className="nav-menu">Book</li>
          <li className="nav-menu">Testimonials</li>
          <li className="nav-menu">Login</li>
          <li className="header__right-btn">Sign up</li>
          <select className="header_right-select">
            <option value="en">EN</option>
            <option value="si">SI</option>
          </select>
        </ul>
      </div>
    </header>
  );
};

export default Header;
