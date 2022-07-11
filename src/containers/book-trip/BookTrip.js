import React from "react";
import { BookStep, Title } from "../../components";
import "./BookTrip.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsCreditCard, BsBuilding } from "react-icons/bs";
import { BiCar } from "react-icons/bi";
import { ImLeaf, ImMap2 } from "react-icons/im";
import { IoIosSend } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { ImgGreece, ImgRome2 } from "../../assets";

const BookTrip = () => {
  return (
    <section className="book">
      <div className="book__left">
        <Title
          title="Book your next trip in 3 easy steps"
          subtitle="Easy and fast"
          center={false}
        />
        <div className="book__left-steps">
          <BookStep
            colorClass="yellow"
            icon={<IoLocationOutline className="icon" />}
            title="Choose Destination"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          />
          <BookStep
            colorClass="orange"
            icon={<BsCreditCard className="icon" />}
            title="Make Payment"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          />
          <BookStep
            colorClass="blue"
            icon={<BiCar className="icon" />}
            title="Reach Airport on Selected Date"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          />
        </div>
      </div>
      <div className="book__right">
        <div>
          <div className="book__right-card">
            <img src={ImgGreece} alt="Trip to greece" />
            <h5>Trip to Greece</h5>
            <p>14-29 June | by Robbin Joseph</p>
            <div>
              <div>
                <ImLeaf className="book__right-card-icons" />
              </div>
              <div>
                <ImMap2 className="book__right-card-icons" />
              </div>
              <div>
                <IoIosSend className="book__right-card-icons" />
              </div>
            </div>
            <div>
              <div>
                <BsBuilding />
                <p>24 people going</p>
              </div>
              <FiHeart />
            </div>
          </div>
          <div className="book__right-status-card">
            <img src={ImgRome2} alt="Trip to rome" />
            <div>
              <p>Ongoing</p>
              <h5>Trip to Rome</h5>
              <p>
                40% <span>completed</span>
              </p>
              <div className="book__right-status-card-progress-bar">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTrip;
