import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="right">
          <img src="img/doctor.png" alt="" />
        </div>
        <div className="locateBar">
          <img src="img/location.png" alt="" />
          <input type="text" placeholder="Search Location..." />
          <div className="locateBtn">Search</div>
        </div>
        <div className="bottom">
          <div className="bCard">
            <img src="img/Stethoscope.png" alt="" />
            <div className="number">800+</div>
            <div className="text">Experinced Doctors</div>
          </div>
          <div className="bCard">
            <img src="img/Hospital.png" alt="" />
            <div className="number">500+</div>
            <div className="text">Certified Hospitals</div>
          </div>
          <div className="bCard">
            <img src="img/time.png" alt="" />
            <div className="number">24Hr.</div>
            <div className="text">Service</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
