import React from "react";

const Reviewcard = (props) => {
  return (
    <>
      <div className="reviewCard">
        <img src={props.img} alt="" />
        <div className="name">{props.name}</div>
        <div className="review">{props.review}</div>
      </div>
    </>
  );
};

export default Reviewcard;
