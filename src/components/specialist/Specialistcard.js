import React from "react";

const SpecialistCard = (props) => {
  return (
    <>
      <div className="specialistCard">
        <img src={props.img} alt="" />
        <span>{props.text}</span>
      </div>
    </>
  );
};

export default SpecialistCard;
