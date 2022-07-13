import React from "react";
import "./NewsLetter.css";
import { MdOutlineEmail } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
import { DecoNewsLetterRight, DecoNewsLetterLeft } from "../../assets";

const NewsLetter = () => {
  return (
    <section className="news-letter">
      <div>
        <div className="news-letter__area">
          <h2>
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h2>
          <div>
            <div className="news-letter__area-input">
              <div>
                <MdOutlineEmail />
              </div>
              <input type="email" placeholder="Your email" />
            </div>
            <div className="news-letter__area-btn">
              <p>Subscribe</p>
            </div>
          </div>
          <div className="news-letter__area-decoration1">
            <img src={DecoNewsLetterRight} alt="Decoration" />
          </div>
          <div className="news-letter__area-decoration2">
            <img src={DecoNewsLetterLeft} alt="Decoration" />
          </div>
        </div>
        <div className="news-letter__area-send">
          <IoPaperPlane />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
