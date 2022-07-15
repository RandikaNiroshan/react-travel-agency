import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { GooglePlayBtn, AppStoreBtn } from "../../assets";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer__logo">
          <h1>
            <Link
              to="hero-section"
              smooth={true}
              offset={0}
              duration={500}
              delay={150}
            >
              Jadoo.
            </Link>
          </h1>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="footer__menu">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>About</td>
                <td>Help/FAQ</td>
                <td>Airline fees</td>
              </tr>
              <tr>
                <td>Careers</td>
                <td>Press</td>
                <td>Airline</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>Affiliates</td>
                <td>Low fare tips</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer__social">
          <div>
            <div className="footer__social-icon">
              <FaFacebookF />
            </div>
            <div className="footer__social-icon">
              <FaInstagram />
            </div>
            <div className="footer__social-icon">
              <FaTwitter />
            </div>
          </div>
          <p>Discover our app</p>
          <div>
            <div>
              <img
                className="store-btn"
                src={GooglePlayBtn}
                alt="Google play"
              />
            </div>
            <div>
              <img className="store-btn" src={AppStoreBtn} alt="App store" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__credit">
        <p>
          ©2022 Jadoo. By{" "}
          <span>
            <a
              href="https://github.com/RandikaNiroshan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Randika"
            >
              Randika Niroshan
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
