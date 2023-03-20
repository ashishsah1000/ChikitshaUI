import React from "react";
import "./hhero.css";

const Hhero = () => {
  return (
    <>
      <div className="hhero">
        <div className="heroBanner">
          <div className="top">
            <img src="img/bramhananda.jpeg" alt="" />
            <span>N Bramhananda</span>
          </div>
          <p>
            “Brahmananda Narayana Multispeciality Hospital, Jamshedpur is
            designed to meet the national and international healthcare standards
            and is committed to providing quality medical care and excellent
            patient service.”
          </p>
        </div>
        <div className="aptBar">
          <div>
            <img src="img/bed.png" alt="" />
            <input type="text" placeholder="Eg. Cardiac" />
          </div>
          <div>
            <img src="img/schedule.png" alt="" />
            <input type="text" placeholder="dd/mm/yyyy" />
          </div>
          <div className="locateBtn">Book Apointment</div>
        </div>
      </div>
    </>
  );
};

export default Hhero;
