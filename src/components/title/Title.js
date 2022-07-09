import React from "react";
import "./Title.css";

const Title = ({ title, subtitle, center = true }) => {
  return (
    <div className={`title `}>
      <h3 className={center && "title-center"}>{subtitle}</h3>
      <h1 className={center && "title-center"}>{title}</h1>
    </div>
  );
};

export default Title;
