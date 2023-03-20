import React from "react";

const Healthmeasurecard = (props) => {
  return (
    <>
      <div
        className="healthmeasureCard"
        style={{ backgroundColor: props.color }}
      >
        <div className="top">
          <img src={props.img} alt="" />
          <span>{props.text}</span>
        </div>
        <div className="btn">
          <a href="#">Know More</a>
        </div>
      </div>
    </>
  );
};

export default Healthmeasurecard;
