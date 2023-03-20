import React from "react";
import "./healthmeasure.css";
import Healthmeasurecard from "./Healthmeasurecard";

const Healthmeasure = () => {
  return (
    <>
      <div className="healthMeasure">
        <div className="homeHeading">
          health measures by ayush
          <img src="img/line.svg" alt="" />
        </div>
        <div className="healthMeasureWrapper">
          <Healthmeasurecard
            color="#FFECEE"
            text="Care in pregnancy and child birth"
            img="img/hc1.png"
          />
          <Healthmeasurecard
            color="#FDF0DF"
            text="Management of Communicable diseases."
            img="img/hc2.png"
          />
          <Healthmeasurecard
            color="#DCFFEF"
            text="Screening and Basic management of Mental health ailments"
            img="img/hc3.png"
          />
        </div>
      </div>
    </>
  );
};

export default Healthmeasure;
