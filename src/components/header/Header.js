import React from "react";
import "./Header.css";
import { Logo } from "../../assets";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header__right">
        <ul>
          <li className="nav-menu">
            <Link
              to="category-section"
              smooth={true}
              offset={-60}
              duration={500}
              delay={150}
            >
              Services
            </Link>
          </li>
          <li className="nav-menu">
            <Link
              to="selling-section"
              smooth={true}
              offset={-60}
              duration={500}
              delay={150}
            >
              Destinations
            </Link>
          </li>
          <li className="nav-menu">
            <Link
              to="book-section"
              smooth={true}
              offset={-60}
              duration={500}
              delay={150}
            >
              Book
            </Link>
          </li>
          <li className="nav-menu">
            <Link
              to="testimonials-section"
              smooth={true}
              offset={-60}
              duration={500}
              delay={150}
            >
              Testimonials
            </Link>
          </li>
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
